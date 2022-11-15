import { IMovement } from "../../types"

export const addOne = (data:IMovement[], setter:Function, newRecord:IMovement )=>{
    setter([...data, newRecord])
}