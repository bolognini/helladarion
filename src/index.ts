import express from 'express'
import routes from './routes'
import cors from 'cors'
import * as admin from "firebase-admin"

const app = express()

const fireBase = admin.initializeApp({
  credential: admin.credential.cert(__dirname + '/serviceAccountKey.json'),
  databaseURL: "https://t20-monster-builder-default-rtdb.firebaseio.com"
})

// era bao bota isso num outro lugar kek
// agora essas aqui retornam o monstro padronizado e n o objeto do firebase
export const saveMonster = async (monster: any, id: string) => {
  // mudei aquela validacao do update pra ca pra controller n ter o poder de quebrar o banco
  if (id) {
    if (await getMonster(id)) {
      const ref = await fireBase.database().ref('monsters/' + id)
      ref.set(monster)
      const snapshot = await ref.get()
      return {id: snapshot.key, ...snapshot.val()}
    }
    return null  // podia tacar um erro aqui mas to com preguica
  }
  const ref = await fireBase.database().ref('monsters/').push(monster)  // push gera uma key automaticamente
  const snapshot = await ref.get()
  return { id: snapshot.key, ...snapshot.val() }
}

export const getMonster = async (id: string) => {
  const snapshot = await fireBase.database().ref('monsters/' + id).get()
  return (snapshot.val() && { id: snapshot.key, ...snapshot.val() }) || null  // aqui tbm podia tacar erro ao inves de retornar null se n achar
}

export const getMonsters = async () => {
  const snapshot = await fireBase.database().ref('monsters').get()
  return snapshot.val() && Object.entries(snapshot.val()).map(([ k, v ]: [string, any]) => ({ id: k, ...v }))
}

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333)
