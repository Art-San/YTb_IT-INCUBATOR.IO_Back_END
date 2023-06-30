import express from 'express'
import { productsRouter } from './routes/products-router'

// создали express app
const app = express()
app.use(express.json())

const port = process.env.PORT || 3001

app.use('/products', productsRouter)

// старт app
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})

// // С post- create- создать
// // R get - reade - читать
// // U put - update- обновить
// // D del - delete -удалить

// // Presentation Layer
// // Business Layer
// // Data Access Layer

// 07- Back-end Путь Самурая Перезагрузка | Express middleware, chain of responsibility
// import express, { NextFunction, Request, Response } from 'express'
// import { productsRouter } from './routes/products-router'
// import { adressRouter } from './routes/addresses-router'

// // создали express app
// const app = express()

// const port = process.env.PORT || 3001

// let blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   // @ts-ignore
//   req.blabla = 'hellou'
//   next()
// }
// let authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   if (req.query.token === '123') {
//     next()
//   } else {
//     res.send(401)
//   }
// }
// let requestCounter = 0
// let requestCountMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   requestCounter++
//   next()
// }

// app.use(requestCountMiddleware) // расположение мидлвер имеет значение
// app.use(blablaMiddleware) // Если мидлвар нужен для всех эндпоинтов
// app.use(authGuardMiddleware)

// // app.get('/products', blablaMiddleware, (req: Request, res: Response) => {
// // Если мидлвар нужен для одного эндпоинта
// app.get('/products', (req: Request, res: Response) => {
//   // @ts-ignore
//   const blabla = req.blabla
//   res.send({ value: blabla + '!!! ' + requestCounter })
// })
// app.get('/users', (req: Request, res: Response) => {
//   // @ts-ignore
//   const blabla = req.blabla
//   res.send({ value: blabla + 'from users !!! ' + requestCounter })
// })

// // старт app
// app.listen(port, () => {
//   console.log(`Example app listening on port: ${port}`)
// })
