import Square from '../square/Square';

/**
 * @description Renders the game board squares
 * @return {*} Board jsx
 */
const Board = (props) => {
    /**
     * @description Renders each square box component with the appropriate props.
     * @param {*} i
     * @return {*} Square component jsx
     */
    const renderSquare = (i) => {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
                disabled={props.disable}
            />
        );
    };

    return (
        <>
            <div className='row d-flex justify-content-center'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='row d-flex justify-content-center'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='row d-flex justify-content-center'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    );
};

export default Board;
