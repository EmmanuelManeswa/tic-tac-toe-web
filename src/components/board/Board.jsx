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

    let rows = [];
    for (let i = 0; i < 3; i++) {
        rows.push(
            <div key={i} className='row d-flex justify-content-center'>
                {renderSquare(i * 3)}
                {renderSquare(i * 3 + 1)}
                {renderSquare(i * 3 + 2)}
            </div>
        );
    }

    return <>{rows}</>;
};

export default Board;
