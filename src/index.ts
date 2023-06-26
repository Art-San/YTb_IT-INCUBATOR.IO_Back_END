import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import cors from 'cors'

// создали express app
const app = express()

const corsMiddlewars = cors()
app.use(corsMiddlewars)
const jsonBodyMiddleware = bodyParser.json()
app.use(jsonBodyMiddleware)

const port = process.env.PORT || 3000

let videos = [
  { id: 1, title: 'About JS - 01', author: 'it-incubatur.ru' },
  { id: 2, title: 'About JS - 02', author: 'it-incubatur.ru' },
  { id: 3, title: 'About JS - 03', author: 'it-incubatur.ru' },
  { id: 4, title: 'About JS - 04', author: 'it-incubatur.ru' },
  { id: 5, title: 'About JS - 05', author: 'it-incubatur.ru' }
]

// const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello IT-INCUBATOR!!!!')
})

app.get('/videos', (req: Request, res: Response) => {
  const arrName = videos.map((video) => video.title)
  res.send(arrName)
})
// app.post('/videos', (req: Request, res: Response) => {}
// app.put('/videos/:videoId', (req: Request, res: Response) => {}
// app.get('/videos/:videoId', (req: Request, res: Response) => {}
// app.delete('/videos/:videoId', (req: Request, res: Response) => {}

// старт app
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})
