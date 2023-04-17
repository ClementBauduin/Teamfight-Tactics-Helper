'use client'
import { useEffect,useState } from 'react'
import {Card} from '../card/Card'
import SearchBar from '../searchBar/SearchBar'
import fetchChampData from '@/app/lib/fetchChampData'
import styles from './App.module.css'

export default function App() {

  const [cards, setCards] = useState<JSX.Element[]>([])
  const [search, setSearch] = useState<string>('')
  const [tier, setTier] = useState<number>(1)
  const [count, setCount] = useState<number>(0)
  const [sameTier, setSameTier] = useState<number>(0)


  const poolSizeTotal:any = {
    1:377,
    2:286,
    3:234,
    4:144,
    5:80    
  }

  const poolSizeTier:any = {
    1:29,
    2:22,
    3:18,
    4:12,
    5:10
  }

  const totalChampTier = poolSizeTotal[tier]

  let probability = ((poolSizeTier[tier]-count)/(totalChampTier-count-sameTier)*100).toFixed(2)
  
  

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchChampData();
        const cards =
          search === ''
            ? data.map((champ) => (
                <Card
                  key={champ.name}
                  name={champ.name}
                  tier={champ.tier}
                  image={champ.image}
                  setCount={setCount}
                  setTier={setTier}
                />
              ))
            : data
                .filter((champ) =>
                  champ.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((champ) => (
                  <Card
                    key={champ.name}
                    name={champ.name}
                    tier={champ.tier}
                    image={champ.image}
                    setCount={setCount}
                    setTier={setTier}
                  />
                ));
        setCards(cards);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [search]);


    return (
      <div>
          <SearchBar setSearch={setSearch} setSameTier={setSameTier}/>
          <p className={styles.result}>Probability to find your champ : {probability}%</p>

          <div className={styles.appContainer}>
            {cards}
          </div>
      </div>
      
    );
  }