import styles from './SearchBar.module.css';

type SearchBarProps = {
  setSearch: (value:string) => void
}


export default function SearchBar({setSearch}: SearchBarProps) {
  return (
    <div className={styles.searchbarContainer}>
      <input type="text" placeholder="Trouvez votre champion..." onChange={(e) => setSearch(e.target.value)}/>
      
    </div>
  )
}
