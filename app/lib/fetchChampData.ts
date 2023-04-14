import type { ChampType } from "../types/tft-champ-data"


async function fetchChampData(): Promise<ChampType[]> {
    const API = process.env.NEXT_PUBLIC_API_URL

    const dataFetch = await fetch(`${API}`)
    if (!dataFetch.ok) {
        throw new Error(`HTTP error! status: ${dataFetch.status}`);
    }
    const data = await dataFetch.json()
    const champArray: ChampType[] = Object.values(data)

    return champArray
}

export default fetchChampData