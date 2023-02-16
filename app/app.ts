import express, { Express, Request, Response } from 'express'
import { Board, Game } from '../Game'
import cors from 'cors'
import { urlencoded, json } from 'body-parser'

const app: Express = express()
const port = '3001'

app.use(cors({origin: 'http://localhost:3000'}))
app.use(json())


const game = new Game()

app.get('/', (req: Request, res: Response) => {
    res.send('please work god please work!!!')
})

app.post<any, any, Board, Board>('/game/play', (req, res) => {
    game.board = req.body
    res.send(req.body)
})

app.get('/next_generation', (req, res) => {
    game.nextGeneration()
    res.send(game.board)
})


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})