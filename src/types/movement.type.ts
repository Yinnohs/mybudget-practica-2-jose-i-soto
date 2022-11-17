export interface IMovement {
    id:string
    description:string
    amount:number
    movementDate: Date
}

export type MovementContextType = {
    movements: IMovement[];
    setMovements: Function
};

export type MovementInputType = {
    description:string
    amount:string,
    movementDate:Date
}
