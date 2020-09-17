import { Request, Response, NextFunction } from 'express';

class CalculationsAPI {
  constructor() { }

  async getBishops(req: Request, res: Response, next: NextFunction) {
    // VARS
    let startingPosition = Number(req.params.startNumber);
    let endPosition = Number(req.params.endNumber);
    let starting_column = (startingPosition - 1) % 8
    let startingRow = Math.floor((startingPosition - 1) / 8)
    let endingColumn = (endPosition - 1) % 8
    let endRow = Math.floor((endPosition - 1) / 8)
    let column_moves = Math.abs(starting_column - endingColumn)
    let rowMoves = Math.abs(startingRow - endRow)

    // TYPE ERRORS
    if (isNaN(startingPosition) || isNaN(endPosition)) {
      res.status(500).send({
        error: "Only numbers are accepted in params"
      });
      // SUCCESS
    } else {
      // CONDITIONS
      if (
        (column_moves == rowMoves) || 
        (column_moves % 2 === rowMoves % 2)) {
        if(column_moves == rowMoves) {
          res.status(200).json(1)
        }
        if (column_moves % 2 === rowMoves % 2) {
          res.status(200).json(2);
        };
      } else {
        res.status(200).json(null);
      };
    }
  }
}

export default new CalculationsAPI();