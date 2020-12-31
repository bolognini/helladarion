import { Router } from 'express'
import MonsterController from './controllers/MonsterController'

const routes = Router()

// mudei o path pra fingir q sei usar rest
routes.put('/monster', MonsterController.createMonster)
routes.get('/monster/:id', MonsterController.getMonster)
routes.get('/monster', MonsterController.getMonsters)

export default routes
