import { v4 } from "uuid";
import { IMovement } from "../../types";

export const createMovement = (amount:number, description:string, date:Date): IMovement =>{
    const id = v4()
    return {
        id:id,
        amount:amount,
        description:description,
        movementDate:date
    }
}