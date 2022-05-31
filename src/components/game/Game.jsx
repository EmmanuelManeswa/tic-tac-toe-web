import { useState } from 'react';

import Board from '../board/Board';
import findWinner from '../../helpers/findWinner';
import noMoreMoves from '../../helpers/noMoreMoves';

/**
 * @description Handles all game related functionalities from time travel to rendering game status information.
 * @return {*} jsx
 */
const Game = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [isXNext, setIsXNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const current = history[stepNumber];
    const winner = findWinner(current.squares);
    const noMoves = noMoreMoves(current.squares);

    /**
     * @description Time travels to the step passed.
     * @param {*} step
     */
    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext(step % 2 === 0);
    };

    /**
     * @description Detemines if next player plays or if the game has been won.
     * @param {*} i
     * @return {*}
     */
    const handleClick = (i) => {
        const _history = history.slice(0, stepNumber + 1);
        const _current = _history[_history.length - 1];
        const _squares = _current.squares.slice();
        if (findWinner(_squares) || _squares[i]) return;
        _squares[i] = isXNext ? 'X' : 'O';
        setHistory(_history.concat({ squares: _squares }));
        setStepNumber(_history.length);
        setIsXNext(!isXNext);
    };

    // The following if statements determine if the game has to contonue or is a draw or win.
    let status = '';
    if (winner) status = `Winner: ${winner}`;
    else if (noMoves) status = 'Draw';
    else status = `Next Player: ${isXNext ? 'X' : 'O'}`;

    const disable = winner || noMoves ? true : false;

    return (
        <>
            <div className='mb-3 text-center'>{status}</div>
            <Board
                squares={current.squares}
                onClick={(i) => handleClick(i)}
                disable={disable}
            />
            <div className='text-center my-3'>
                <button
                    className='mx-2 px-3'
                    onClick={() => jumpTo(stepNumber - 1)}
                    disabled={stepNumber <= 0 ? true : false}
                >
                    Prev
                </button>
                <button
                    className='mx-2 px-3'
                    onClick={() => jumpTo(stepNumber + 1)}
                    disabled={
                        stepNumber === 9 || stepNumber + 1 >= history.length
                            ? true
                            : false
                    }
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Game;
