import express from 'express'
import routes from './routes'
import cors from 'cors'
import firebase from 'firebase'

const app = express()

export const fireData = firebase.initializeApp({
  apiKey: "AIzaSyD7n5thEFnMsCWOamdA-JCzP3q7hernoJc",
  authDomain: "t20-monster-builder.firebaseapp.com",
  projectId: "t20-monster-builder",
  storageBucket: "t20-monster-builder.appspot.com",
  messagingSenderId: "1086763486433",
  appId: "1:1086763486433:web:4552ad0b532f4d403dbba0"
})

export const saveMonster = (monster: any, id: string) => {
  return fireData.database().ref('monsters/' + id).set(monster)
}

export const getMonster = (id: string) => {
  return fireData.database().ref('monsters/' + id).once("value")
}

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333)