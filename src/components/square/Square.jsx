import styles from './square.module.css';

/**
 * @description Square button box component.
 * @param {*} props (value, onClick(), disabled)
 * @return {*} Square button jsx
 */
const Square = (props) => {
    return (
        <button
            className={styles.square}
            onClick={() => props.onClick()}
            disabled={props.disabled}
        >
            {props.value}
        </button>
    );
};

export default Square;
