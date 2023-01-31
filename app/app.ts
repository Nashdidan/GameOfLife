import express, { Express, Request, Response } from 'express'
import { Board, Game } from '../Game'

const app: Express = express()
const port = '3000'


const game = new Game()

app.get('/', (req: Request, res: Response) => {
    res.send('please work god please work!!!')




})

app.get<any, any, any, Board>('/game/play', (req, res) => {
    // generate first board
    // save it in game
    // return it
    game.nextGeneration(req.body)

})



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})