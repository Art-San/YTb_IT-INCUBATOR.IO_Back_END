import express from 'express'
import { productsRouter } from './routes/products-router'
import { adressRouter } from './routes/addresses-router'

// создали express app
const app = express()
app.use(express.json())

const port = process.env.PORT || 3001

app.use('/products', productsRouter)
app.use('/addresses', adressRouter)

// старт app
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})

// С post- create- создать
// R get - reade - читать
// U put - update- обновить
// D del - delete -удалить
// 34:23
