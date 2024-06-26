import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
    return (
    <label className={styles.searchBoxLabel}>
        <span className={styles.searchBoxLabelText}>Find contacts by name</span>
        <input
        type="text"
        name="search"
        value={value}
        onChange={onChange}
        className={styles.searchBoxInput}
        />
    </label>
    );
};

export default SearchBox;