export interface Character {
  id:number,
  name:string,
  gender:string,
  image:string,
  status: "Alive" | "Dead" | "unknown"
}
