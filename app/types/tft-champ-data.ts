//create a type for champ data
export type ChampType = {

    name: string;
    tier: Tier;
    image: string;
}

enum Tier {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4
}

