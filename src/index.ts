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

app.post('/products', (req: Request, res: Response) => {
  console.log(req.body)

  res.send('пока еще мутим')
})

// app.delete('/products/:id', (req: Request, res: Response) => {
//   const data = req.params.id
//   let product = products.filter((p) => p.id !== +data)
//   res.send(product)
// })

// app.get('/products/:productTitle', (req: Request, res: Response) => {
//   const data = req.params.productTitle
//   let product = products.find((g) => g.title === data)
//   if (product) {
//     res.send(product)
//   } else {
//     res.send(404)
//   }
// })

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
