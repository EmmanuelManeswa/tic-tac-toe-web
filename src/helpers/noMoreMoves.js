/**
 * @description Given an array of 9 squares, this function will find if there are still any possible moves.
 * @param {*} squares
 * @return {*} Boolean (true or false)
 */
const noMoreMoves = (squares) => {
    for (const square of squares) {
        if (!square) return false;
    }
    return true;
};

export default noMoreMoves;
