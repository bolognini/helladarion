import { Router } from 'express'
import MonsterController from './controllers/MonsterController'

const routes = Router()

routes.post('/monster/create', MonsterController.createMonster)
routes.get('/monster/:id', MonsterController.getMonster)

export default routes