
type Boards  = Set<{key: Coordinate, value: number}>

type Coordinate = {x: number, y: number}

class Board{
    living_cells: Cell[] = []
    dead_cells: Cell[] = []

}

class Cell{
    is_alive: Boolean = true
    is_dirty: Boolean = false
    coordinate: Coordinate
    neigbers
}

class Game {
    boardStates: Board[]
    gameResolution = {x: 10, y: 10}
    offset = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]

    nextGeneration(board: Board) {
        this.boardStates.push(board)
        const neigberhood: Coordinate[] = []
        // const birthCandidates: {[p: Coordinate]: number} = {}

        board.living_cells.forEach(cell => {

            this.offset.forEach(neighborOffset => {

                //when reaching the board limits
                if ((cell.key.x == 0 && neighborOffset[0] < 0) || (cell.key.x == 0 && neighborOffset[1] < 0) ||
                    (cell.key.x == this.gameResolution.x && neighborOffset[0] > 0 || cell.key.y == this.gameResolution.y && neighborOffset[1] > 0)){
                    continue
                }

                const next_cell: Coordinate = {x: cell.key.x + neighborOffset[0], y: cell.key.y + neighborOffset[1]}
                if (board.has(next_cell))) {
                    neigberhood.push(next_cell)
                    board.remove(next_cell)
                } else {
                    // insert dead neighbor to birthCandidates with count 1
                    // or if exists, ++
                }
            
            
            })

            calc_neigberhood()
            const after = 

            return cell
        })    

    calc_neigberhood(neigberhood: Coordinate[]){
        //take max x or y and kill
    }


    }

}

export { Board, Game }