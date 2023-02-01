import express, { Express, Request, Response } from 'express'
import { Board, Game } from '../Game'

const app: Express = express()
const port = '3001'


const game = new Game()

app.get('/', (req: Request, res: Response) => {
    res.send('please work god please work!!!')




})

app.get<any, any, any, Board>('/game/play', (req, res) => {
    // generate first board
    // save it in game
    // return it
    game.board = req.body
    res.write(game.board)
})

app.get('/next_generation', (req, res) => {
    game.nextGeneration()
    res.write(game.board)

})


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})