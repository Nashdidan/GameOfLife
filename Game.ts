
type Boards  = Set<{key: Coordinate, value: number}>

type Coordinate = {x: number, y: number}

export type Board = {
    living_cells: Cell[]
    dead_cells: Cell[]
}

class Cell {
    is_alive: Boolean = true
    next_state: boolean
    is_dirty: Boolean = false
    coordinate: Coordinate
    living_neigbers: number
}

const coordinateEq = (a: Coordinate, b: Coordinate) => {
    return a.x === b.x && a.y === b.y
}

class Game {
    board: Board
    gameResolution = {x: 3, y: 3}
    offset = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]

    nextGeneration() {
        // const birthCandidates: {[p: Coordinate]: number} = {}
        
        this.board.living_cells.forEach(cell => {
            this.calc_neigberhood(cell, this.board)            
        })

        const boardAfter: Board = {living_cells: [], dead_cells: []}
        boardAfter.living_cells = this.board.living_cells.filter(cell => cell.next_state).concat(
            this.board.dead_cells.filter(cell => cell.living_neigbers === 3))

        this.board = boardAfter
    }
    
    calc_neigberhood(cell: Cell, board: Board){
        const neigberhood: Cell[] = []

        for (const neighborOffset of this.offset) {
    
            const neighbor_coordinate: Coordinate = {x: cell.coordinate.x + neighborOffset[0], y: cell.coordinate.y + neighborOffset[1]}

            //when reaching the board limits (boardType === 'flat')
            if ((neighbor_coordinate.x < 0) || (neighbor_coordinate.y < 0) ||
                (neighbor_coordinate.x > 3 || neighbor_coordinate.y > 3)){
                continue
            }
    
            
            if (board.living_cells.map(c => c.coordinate).includes(neighbor_coordinate)) {
                const neighbor_cell = board.living_cells.find(c => coordinateEq(c.coordinate, neighbor_coordinate))!
    
                if (neighbor_cell.is_dirty) {
                    continue
                }
    
                neigberhood.push(neighbor_cell)
                
                // is dirty
                board.living_cells = board.living_cells.filter(c => !coordinateEq(c.coordinate, neighbor_coordinate))
            } else {
                const neighbor_cell = board.dead_cells.find(c => coordinateEq(c.coordinate, neighbor_coordinate))!
                if (neighbor_cell != undefined)
                    neighbor_cell.living_neigbers++
            }
        }
    
        cell.is_dirty = true
        if (neigberhood.length >= 2 && neigberhood.length <= 3) {
            cell.next_state = true
        } else {
            cell.next_state = false
        }

        neigberhood.filter(neigh => !neigh.is_dirty).forEach(c => this.calc_neigberhood(c, board))
    }
}

export { Game }