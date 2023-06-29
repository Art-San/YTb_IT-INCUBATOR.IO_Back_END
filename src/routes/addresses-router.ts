// Presentation Layer
import { addressesRepository } from './../repositories/addresses.repository'
import { Router, Request, Response } from 'express'

export const adressRouter = Router({})
adressRouter.get('/', (req: Request, res: Response) => {
  const allAddresses = addressesRepository.findAllAddresses()
  res.send(allAddresses)
})
adressRouter.get('/:id', (req: Request, res: Response) => {
  const adress = addressesRepository.findAddressById(Number(req.params.id))
  res.send(adress)
})
