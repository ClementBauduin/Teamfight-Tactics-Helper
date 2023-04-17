import styles from './SearchBar.module.css';

type SearchBarProps = {
  setSearch: (value:string) => void;
  setSameTier: (value:number) => void;

}


export default function SearchBar({setSearch,setSameTier}: SearchBarProps) {
  return (
    <div className={styles.searchbarContainer}>
      <input type="text" placeholder="Find your champ..." onChange={(e) => setSearch(e.target.value)}/>
      <input type="text" placeholder="How many champ of same tier out?" onChange={(e) => setSameTier(parseInt(e.target.value))}/>
    </div>
  )
}
