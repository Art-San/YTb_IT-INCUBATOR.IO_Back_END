// Presentation Layer
import { Router, Request, Response } from 'express'
import { productsRepository } from '../repositories/products.repository'
import { body, validationResult } from 'express-validator'

export const productsRouter = Router({})
// 22:30
/*Создание добавление продукта */
productsRouter.post(
  '/',
  body('title')
    .notEmpty()
    .withMessage('Поле title является обязательным')
    .isLength({ min: 3, max: 10 })
    .withMessage('Поле название не должно меньше 3 и больше 10 знаков'),
  body('price')
    .notEmpty()
    .withMessage('Поле цена является обязательным')
    .isLength({ max: 5 })
    .withMessage('Поле цена должно содержать как максимум 5 символа'),
  (req: Request, res: Response) => {
    const { title, price } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const newProdyct = productsRepository.createProduct(title, price)
    res.status(201).send(newProdyct)

    // if (!title.trim() || !price.trim()) {
    //   res.status(400).send({ messege: 'Поля обязательы для заполнения' })
    // } else {
    //   const newProdyct = productsRepository.createProduct(title, price)
    //   res.status(201).send(newProdyct)
    // }
  }
)

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

/*(?title=man query параметр) фильтрыция http://localhost:3001/products?title=man  */
productsRouter.get('/', (req: Request, res: Response) => {
  console.log(req.query.title)
  const faundProduct = productsRepository.findProducts(
    req.query.title?.toString()
  )
  res.send(faundProduct)
})

/**получение продукта по :id url params */
productsRouter.get('/:id', (req: Request, res: Response) => {
  const product = productsRepository.findProductById(+req.params.id)
  res.send(product)
})

/**удаление по req.params с помощью цикла FOR */
productsRouter.delete('/:id', (req: Request, res: Response) => {
  const answer = productsRepository.removeProduct(+req.params.id)
  res.send(answer)
})
