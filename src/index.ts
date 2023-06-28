import express, { Request, Response } from 'express'

// создали express app
const app = express()
app.use(express.json())

const port = process.env.PORT || 3001

const products = [
  { id: 1, title: 'tomato', price: '10' },
  { id: 2, title: 'orange', price: '134' },
  { id: 3, title: 'persik', price: '155' },
  { id: 4, title: 'mango', price: '200' }
]
const addresses = [
  { id: 1, value: 'Nezalejnasti 12' },
  { id: 2, value: 'Selickaga 11' }
]

/*(?title=man query параметр) фильтрыция http://localhost:3001/products?title=man  */
app.get('/products', (req: Request, res: Response) => {
  if (req.query.title) {
    let searchString = req.query.title.toString()
    res.send(products.filter((p) => p.title.indexOf(searchString) > -1))
  } else {
    res.send(products)
  }
})

/*Создание добавление продукта */
app.post('/products', (req: Request, res: Response) => {
  const newProdyct = {
    id: +new Date(),
    title: req.body.title,
    price: req.body.price
  }
  products.push(newProdyct)

  res.status(201).send(products)
})

/**получение продукта по :id url params */
app.get('/products/:id', (req: Request, res: Response) => {
  const data = req.params.id
  let product = products.find((p) => p.id === +data)
  if (product) {
    res.send(product)
  } else {
    res.send(404)
  }
})

/*Обновление продукта продукта */
app.put('/products/:id', (req: Request, res: Response) => {
  const product = products.find((p) => p.id === +req.params.id)
  if (product) {
    product.title = req.body.title
    product.price = req.body.price
    // res.send(product)
    res.send(products)
  } else {
    // res.send(404)
    res.status(404).send({ error: 'Product not found' })
  }
})

/**удаление по req.params с помощью цикла FOR */
app.delete('/products/:id', (req: Request, res: Response) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === +req.params.id) {
      products.splice(i, 1)
      res.send(204)
      return
    }
  }
  res.send(404)
})

app.get('/addresses', (req: Request, res: Response) => {
  res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
  const adress = addresses.find((a) => a.id === Number(req.params.id))
  if (adress) {
    res.send(adress)
  } else {
    res.send(404)
  }
})

// старт app
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})

// С post- create- создать
// R get - reade - читать
// U put - update- обновить
// D del - delete -удалить
// 34:23
