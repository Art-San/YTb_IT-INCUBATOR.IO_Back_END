// Presentation Layer
import { Router, Request, Response } from 'express'
import { productsRepository } from '../repositories/products.repository'

export const productsRouter = Router({})

/*(?title=man query параметр) фильтрыция http://localhost:3001/products?title=man  */
productsRouter.get('/', (req: Request, res: Response) => {
  console.log(req.query.title)
  const faundProduct = productsRepository.findProducts(
    req.query.title?.toString()
  )
  res.send(faundProduct)
})

/*Создание добавление продукта */
productsRouter.post('/', (req: Request, res: Response) => {
  const { title, price } = req.body
  const allProducts = productsRepository.createProduct(title, price)
  res.status(201).send(allProducts)
})

/**получение продукта по :id url params */
productsRouter.get('/:id', (req: Request, res: Response) => {
  const product = productsRepository.findProductById(+req.params.id)
  res.send(product)
})

/*Обновление продукта продукта */
productsRouter.put('/:id', (req: Request, res: Response) => {
  const id = +req.params.id
  const { title, price } = req.body
  const isUpdated = productsRepository.updateProduct(id, title, price)
  if (isUpdated) {
    res.send(productsRepository.findProductById(id))
  } else {
    res.send(404)
  }
})

/**удаление по req.params с помощью цикла FOR */
productsRouter.delete('/:id', (req: Request, res: Response) => {
  const answer = productsRepository.removeProduct(+req.params.id)
  res.send(answer)
})
