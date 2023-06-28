import { Router, Request, Response } from 'express'

const addresses = [
  { id: 1, value: 'Nezalejnasti 12' },
  { id: 2, value: 'Selickaga 11' }
]

export const adressRouter = Router({})
adressRouter.get('/', (req: Request, res: Response) => {
  res.send(addresses)
})
adressRouter.get('/:id', (req: Request, res: Response) => {
  const adress = addresses.find((a) => a.id === Number(req.params.id))
  if (adress) {
    res.send(adress)
  } else {
    res.send(404)
  }
})
