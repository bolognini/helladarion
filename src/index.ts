import dotenv from 'dotenv'
import express from 'express'
import routes from './routes'
import cors from 'cors'
import * as admin from "firebase-admin"
import { ServiceAccount } from "firebase-admin";

dotenv.config()
const app = express()

app.use(express.json({ limit: '25mb' }))

app.use(express.json())
app.use(cors({
  origin: '*',
  allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Authorization',
  methods: ['GET', 'PUT', 'POST']
}))
app.use(routes)

const privateKey: string = process.env.FIREBASE_PRIVATE_KEY as string

const adminConfig = {
  "type": process.env.FIREBASE_TYPE,
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": privateKey.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
}

const fireBase = admin.initializeApp({
  credential: admin.credential.cert(adminConfig as ServiceAccount),
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

app.listen(process.env.PORT || 3333)