import { createMonster, getMonster } from '../index'
import { Request, Response } from 'express'

export default {
  async get(req: Request, res: Response) {
    getMonster(req.params.id).then((monster) => {
      if (monster.val()) {
        res.status(200).json({
          monster: {
            id: req.params.id,
            name: monster.val().name,
            description: monster.val().description,
            ...monster.val(),
          },
        })
      } else {
        res.status(204).json({ message: 'Monster not found!' })
      }
    })
  },

  async create(req: Request, res: Response) {
    const data = req.body

    const monster = {
      name: data.name,
      description: data.description,
      level: data.level,
      defense: data.defense,
      distance: data.distance,
      healthpoints: data.healthpoints,
      currentHealth: data.currentHealth,
      treasury: data.treasury,
      notes: data.notes,
      mugshot: data.mugshot,
      attributes: data.attributes.map((attr: { name: string; value: string; modificator: string }) => {
        return { name: attr.name, value: attr.value, modificator: attr.modificator }
      }),
      senses: data.senses.map(
        (sense: { name: string; rolling: string }) => {
          return { name: sense.name, rolling: sense.rolling }
        }
      ),
      resistances: data.resistances.map(
        (resistance: { name: string; rolling: string }) => {
          return { name: resistance.name, rolling: resistance.rolling }
        }
      ),
      attacks: data.attacks.map(
        (attack: {
          attackName: string
          bonus: string
          damage: string
          critic: string
          attType: string
          range: string
          test: string
        }) => {
          return {
            attackName: attack.attackName,
            bonus: attack.bonus,
            damage: attack.damage,
            critic: attack.critic,
            attType: attack.attType,
            range: attack.range,
            test: attack.test,
          }
        }
      ),
    }

    const id = String(Date.now())
    createMonster(monster, id).then(() => res.status(201).json({ id }))
  },

  async update(req: Request, res: Response) {
    const data = req.body
    const id = data.id

    const monster = {
      name: data.name,
      description: data.description,
      level: data.level,
      defense: data.defense,
      distance: data.distance,
      healthpoints: data.healthpoints,
      currentHealth: data.currentHealth,
      treasury: data.treasury,
      notes: data.notes,
      mugshot: data.mugshot,
      attributes: data.attributes.map((attr: { name: string; value: string; modificator: string }) => {
        return { name: attr.name, value: attr.value, modificator: attr.modificator }
      }),
      senses: data.senses.map(
        (sense: { name: string; rolling: string }) => {
          return { name: sense.name, rolling: sense.rolling }
        }
      ),
      resistances: data.resistances.map(
        (resistance: { name: string; rolling: string }) => {
          return { name: resistance.name, rolling: resistance.rolling }
        }
      ),
      attacks: data.attacks.map(
        (attack: {
          attackName: string
          bonus: string
          damage: string
          critic: string
          attType: string
          range: string
          test: string
        }) => {
          return {
            attackName: attack.attackName,
            bonus: attack.bonus,
            damage: attack.damage,
            critic: attack.critic,
            attType: attack.attType,
            range: attack.range,
            test: attack.test,
          }
        }
      ),
    }

    getMonster(data.id).then((data) => {
      if (data.val()) {
        createMonster(monster, id).then(() =>
          res.status(200).json({ id })
        )
      } else {
        res.status(404).json({ message: 'Not found!' })
      }
    })
  },
}
