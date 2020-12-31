import { saveMonster, getMonster, getMonsters } from '../index'
import { Request, Response } from 'express'

export default {
  async createMonster(req: Request, res: Response) {
    // super gambeta pra eu poder mandar as coisa vazia
    const monster = {
      name: req.body.name || null,
      description: req.body.description || null,
      level: req.body.level || null,
      defense: req.body.defense || null,
      distance: req.body.distance || null,
      healthpoints: req.body.healthpoints || null,
      attributes: {
        "FOR": {
          value: (req.body.attributes && req.body.attributes["FOR"] && req.body.attributes["FOR"].value) || null,
          modificator: (req.body.attributes && req.body.attributes["FOR"] && req.body.attributes["FOR"].modificator) || null,
        },
        "DES": {
          value: (req.body.attributes && req.body.attributes["DES"] && req.body.attributes["DES"].value) || null,
          modificator: (req.body.attributes && req.body.attributes["DES"] && req.body.attributes["DES"].modificator) || null,
        },
        "CON": {
          value: (req.body.attributes && req.body.attributes["CON"] && req.body.attributes["CON"].value) || null,
          modificator: (req.body.attributes && req.body.attributes["CON"] && req.body.attributes["CON"].modificator) || null,
        },
        "INT": {
          value: (req.body.attributes && req.body.attributes["INT"] && req.body.attributes["INT"].value) || null,
          modificator: (req.body.attributes && req.body.attributes["INT"] && req.body.attributes["INT"].modificator) || null,
        },
        "SAB": {
          value: (req.body.attributes && req.body.attributes["SAB"] && req.body.attributes["SAB"].value) || null,
          modificator: (req.body.attributes && req.body.attributes["SAB"] && req.body.attributes["SAB"].modificator) || null,
        },
        "CAR": {
          value: (req.body.attributes && req.body.attributes["CAR"] && req.body.attributes["CAR"].value) || null,
          modificator: (req.body.attributes && req.body.attributes["CAR"] && req.body.attributes["CAR"].modificator) || null,
        }
      },
      senses:
          (req.body.senses && req.body.senses.map((sense: { name: string; rolling: string }) => {
            return { name: sense.name, rolling: sense.rolling }
          })) || null
    }

    saveMonster(monster, req.body.id)
        .then(monster => {
          if (monster) {
            res.status(200).json({ monster })
          } else {
            res.status(404).json({ message: "Not found!" })
          }
        })
  },

  async getMonster(req: Request, res: Response) {
    getMonster(req.params.id).then(monster => res.status(200).json({ monster }))
  },

  async getMonsters(req: Request, res: Response) {
    getMonsters().then(monsters => res.status(200).json({ monsters }))
  }
}