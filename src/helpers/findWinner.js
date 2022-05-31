/**
 * @description Given an array of 9 squares, this function will check for a winner.
 * @param {*} squares
 * @return {*} 'X' or 'O' or null
 */
const findWinner = (squares) => {
    const lineOptions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let lineOption of lineOptions) {
        const [x, y, z] = lineOption;
        if (
            squares[x] &&
            squares[x] === squares[y] &&
            squares[x] === squares[z]
        )
            return squares[x];
    }
    return null;
};

export default findWinner;
