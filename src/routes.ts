import { Router } from 'express'
import MonsterController from './controllers/MonsterController'

const routes = Router()

routes.post('/monster/create', MonsterController.create)
routes.put('/monster/update', MonsterController.update)
routes.get('/monster/:id', MonsterController.get)

export default routes