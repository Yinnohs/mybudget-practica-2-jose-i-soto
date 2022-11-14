import { IMovement } from "../../types";

export function deleteOne(data:IMovement[], setter:Function, id:string){
    const newData = data.filter((element)=> element.id as string !== id )
    setter(newData)
}