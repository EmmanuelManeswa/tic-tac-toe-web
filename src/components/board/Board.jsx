import { useState } from 'react';

import Square from '../square/Square';
import findWinner from '../../helpers/findWinner';
import noMoreMoves from '../../helpers/noMoreMoves';

/**
 * @description
 * @return {*} Board jsx
 */
const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = findWinner(squares);
    const noMoves = noMoreMoves(squares);
    let status;

    // The following if statements determine if the game has to contonue or is a draw or win.
    if (winner) status = `Winner: ${winner}`;
    else if (noMoves) status = 'Draw';
    else status = `Next Player: ${isXNext ? 'X' : 'O'}`;

    const disable = winner || noMoves ? true : false;

    /**
     * @description Renders each square box component with the appropriate props.
     * @param {*} i
     * @return {*} Square component jsx
     */
    const renderSquare = (i) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
                disabled={disable}
            />
        );
    };

    /**
     * @description Detemines if next player plays or if the game has been won.
     * @param {*} i
     * @return {*}
     */
    const handleClick = (i) => {
        const _squares = squares.slice();
        if (findWinner(_squares) || _squares[i]) return;
        _squares[i] = isXNext ? 'X' : 'O';
        setSquares(_squares);
        setIsXNext(!isXNext);
    };

    return (
        <>
            <div className='mb-2'>{status}</div>
            <div className='row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    );
};

export default Board;
