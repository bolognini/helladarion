import express from 'express'
import routes from './routes'
import cors from 'cors'
import * as admin from "firebase-admin"
import serviceAccount from '../../serviceAccountKey.json'

const app = express()

const fireBase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://t20-monster-builder-default-rtdb.firebaseio.com"
})

export const createMonster = (monster: any, id: string) => {
  return fireBase.database().ref('monsters/' + id).set(monster)
}

export const updateMonster = (monster: any, id: string) => {
  return fireBase.database().ref('monsters/' + id).set(monster)
}

export const getMonster = (id: string) => {
  return fireBase.database().ref('monsters/' + id).once("value")
}

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333)