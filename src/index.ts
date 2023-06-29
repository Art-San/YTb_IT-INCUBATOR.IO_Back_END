import express, { NextFunction, Request, Response } from 'express'
import { productsRouter } from './routes/products-router'
import { adressRouter } from './routes/addresses-router'

// создали express app
const app = express()

const port = process.env.PORT || 3001

app.get(
  '/products',
  (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.blabla = 'hellou'
    next()
  },
  (req: Request, res: Response) => {
    // @ts-ignore
    const blabla = req.blabla
    res.send({ value: blabla })
  }
)

// старт app
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})

// 14:11

// import express from 'express'
// import { productsRouter } from './routes/products-router'
// import { adressRouter } from './routes/addresses-router'

// // создали express app
// const app = express()
// app.use(express.json())

// const port = process.env.PORT || 3001

// app.use('/products', productsRouter)
// app.use('/addresses', adressRouter)

// // старт app
// app.listen(port, () => {
//   console.log(`Example app listening on port: ${port}`)
// })

// // С post- create- создать
// // R get - reade - читать
// // U put - update- обновить
// // D del - delete -удалить

// // Presentation Layer
// // Business Layer
// // Data Access Layer
