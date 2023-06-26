import express, { Request, Response } from 'express'

// создали express app
const app = express()

const port = process.env.PORT || 3001

const products = [
  { id: 1, title: 'tomato', price: '10' },
  { id: 2, title: 'orange', price: '134' }
]
const addresses = [
  { id: 1, value: 'Nezalejnasti 12' },
  { id: 2, value: 'Selickaga 11' }
]

app.get('/products', (req: Request, res: Response) => {
  if (req.query.title) {
    let searchString = req.query.title.toString()
    res.send(products.filter((p) => p.title.indexOf(searchString) > -1))
  } else {
    res.send(products)
  }
})
app.get('/products/:id', (req: Request, res: Response) => {
  const data = req.params.id
  let product = products.find((p) => p.id === +data)
  if (product) {
    res.send(product)
  } else {
    res.send(404)
  }
})
app.get('/products/:productTitle', (req: Request, res: Response) => {
  const data = req.params.productTitle
  let product = products.find((g) => g.title === data)
  if (product) {
    res.send(product)
  } else {
    res.send(404)
  }
})

app.get('/addresses/:id', (req: Request, res: Response) => {
  const adress = addresses.find((a) => a.id === Number(req.params.id))
  if (adress) {
    res.send(adress)
  } else {
    res.send(404)
  }
})
// app.post('/videos', (req: Request, res: Response) => {}
// app.put('/videos/:videoId', (req: Request, res: Response) => {}
// app.get('/videos/:videoId', (req: Request, res: Response) => {}
// app.delete('/videos/:videoId', (req: Request, res: Response) => {}

// старт app
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})

// С post- create- создать
// R get - reade - читать
// U put - update- обновить
// D del - delete -удалить
// 52:50
