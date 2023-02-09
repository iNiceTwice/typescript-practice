export interface Character {
  id:number,
  name:string,
  gender:string,
  image:string,
  status: "Alive" | "Dead" | "unknown"
}

export interface State {
    characters: Character[],
    currentPage: number,
    pages: number,
    query:string
}