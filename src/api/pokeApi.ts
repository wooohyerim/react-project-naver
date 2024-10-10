export type RootObject = {
  count: number
  next: string
  previous: null
  results: Result[]
}

export type Result = {
  name: string
  url: string
}

export const getPokeApi = (offset: number) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
  ).then<RootObject>((res) => res.json())
}
