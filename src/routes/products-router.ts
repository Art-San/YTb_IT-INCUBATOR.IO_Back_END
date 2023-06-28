import { Router, Request, Response } from 'express'
import { productsRepository } from '../repositories/products.repository'

export const productsRouter = Router({})

/*(?title=man query параметр) фильтрыция http://localhost:3001/products?title=man  */
productsRouter.get('/', (req: Request, res: Response) => {
  console.log(req.query.title)
  const faundProduct = productsRepository.findProducts(
    req.query.title ? req.query.title.toString() : null
  )
  res.send(faundProduct)
  // if (req.query.title) {
  //   let searchString = req.query.title.toString()
  //   res.send(products.filter((p) => p.title.indexOf(searchString) > -1))
  // } else {
  //   res.send(products)
  // }
})

/*Создание добавление продукта */
// productsRouter.post('/', (req: Request, res: Response) => {
//   const newProdyct = {
//     id: +new Date(),
//     title: req.body.title,
//     price: req.body.price
//   }
//   products.push(newProdyct)

//   res.status(201).send(products)
// })

/**получение продукта по :id url params */
// productsRouter.get('/:id', (req: Request, res: Response) => {
//   const data = req.params.id
//   let product = products.find((p) => p.id === +data)
//   if (product) {
//     res.send(product)
//   } else {
//     res.send(404)
//   }
// })

/*Обновление продукта продукта */
// productsRouter.put('/:id', (req: Request, res: Response) => {
//   const product = products.find((p) => p.id === +req.params.id)
//   if (product) {
//     product.title = req.body.title
//     product.price = req.body.price
//     // res.send(product)
//     res.send(products)
//   } else {
//     // res.send(404)
//     res.status(404).send({ error: 'Product not found' })
//   }
// })

/**удаление по req.params с помощью цикла FOR */
// productsRouter.delete('/:id', (req: Request, res: Response) => {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === +req.params.id) {
//       products.splice(i, 1)
//       res.send(204)
//       return
//     }
//   }
//   res.send(404)
// })
