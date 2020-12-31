import { createMonster, getMonster } from '../index'
import { Request, Response } from 'express'

export default {
  async get(req: Request, res: Response) {
    getMonster(req.params.id).then(monster => {
      res.status(200).json({ monster: { id: req.params.id, ...monster.val() } })
    })
  },

  async create(req: Request, res: Response) {
    const monster = {
      name: req.body.name,
      description: req.body.description,
      level: req.body.level,
      defense: req.body.defense,
      distance: req.body.distance,
      healthpoints: req.body.healthpoints,
      attributes: {
        "FOR": {
          value: req.body.attributes["FOR"].value,
          modificator: req.body.attributes["FOR"].modificator
        },
        "DES": {
          value: req.body.attributes["DES"].value,
          modificator: req.body.attributes["DES"].modificator
        },
        "CON": {
          value: req.body.attributes["CON"].value,
          modificator: req.body.attributes["CON"].modificator
        },
        "INT": {
          value: req.body.attributes["INT"].value,
          modificator: req.body.attributes["INT"].modificator
        },
        "SAB": {
          value: req.body.attributes["SAB"].value,
          modificator: req.body.attributes["SAB"].modificator
        },
        "CAR": {
          value: req.body.attributes["CAR"].value,
          modificator: req.body.attributes["CAR"].modificator
        }
      },
      senses:
        req.body.senses.map((sense: { name: string; rolling: string }) => {
          return { name: sense.name, rolling: sense.rolling }
        })
    }

      const id = String(Date.now())
      createMonster(monster, id).then(() => res.status(201).json({ id }))
  },

  async update(req: Request, res: Response) {
    const monster = {
      name: req.body.name,
      description: req.body.description,
      level: req.body.level,
      defense: req.body.defense,
      distance: req.body.distance,
      healthpoints: req.body.healthpoints,
      attributes: {
        "FOR": {
          value: req.body.attributes["FOR"].value,
          modificator: req.body.attributes["FOR"].modificator
        },
        "DES": {
          value: req.body.attributes["DES"].value,
          modificator: req.body.attributes["DES"].modificator
        },
        "CON": {
          value: req.body.attributes["CON"].value,
          modificator: req.body.attributes["CON"].modificator
        },
        "INT": {
          value: req.body.attributes["INT"].value,
          modificator: req.body.attributes["INT"].modificator
        },
        "SAB": {
          value: req.body.attributes["SAB"].value,
          modificator: req.body.attributes["SAB"].modificator
        },
        "CAR": {
          value: req.body.attributes["CAR"].value,
          modificator: req.body.attributes["CAR"].modificator
        }
      },
      senses:
        req.body.senses.map((sense: { name: string; rolling: string }) => {
          return { name: sense.name, rolling: sense.rolling }
        })
    }

    getMonster(req.body.id).then(data => {
      if (data.val()) {
        createMonster(monster, req.body.id)
          .then(() => res.status(200).json({ id: req.body.id }))
      } else {
        res.status(404).json({ message: "Not found!" })
      }
    })
  },
}