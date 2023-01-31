
type Board  = Set<{x: number, y: number}>

type Coordinate = {x: number, y: number}

class Game {
    boardStates: Board[]
    gameResolution = {x: 10, y: 10}



    nextGeneration(board: Board) {
        this.boardStates.push(board)

        const birthCandidates: {[p: Coordinate]: number} = {}

        board.forEach(cell => {
            let livingNeighbors = 0;

            [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(neighborOffset => {
                if (board.has({x: cell.x + neighborOffset[0], y: cell.y + neighborOffset[1]})) {
                    livingNeighbors++
                    
                } else {
                    // insert dead neighbor to birthCandidates with count 1
                    // or if exists, ++
                }
            })


            const after = 

            return cell
        })    

    }
}

export { Board, Game }