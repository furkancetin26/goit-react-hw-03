import styles from './SearchBox.module.css';

function SearchBox({ filter, onChange }) {
  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name
        <input
          value={filter}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        />
      </label>
    </div>
  );
}

export default SearchBox;
