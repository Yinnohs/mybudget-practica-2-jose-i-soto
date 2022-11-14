// context/todoContext.tsx
import * as React from 'react';
import { v4 } from 'uuid';
import { IMovement, MovementContextType } from '../types/movement.type';

export const MovementsContext= React.createContext<MovementContextType | null>(null);
export const MovementsContextProvider = MovementsContext.Provider;
const currentDate = new Date()
const mockData :IMovement[] =[
  {
    id:"305ee823-8f48-4f88-af9f-52900de70f47",
    amount:-200,
    description:" Movimiento negativo ",
    movementDate: currentDate
  },
  {
    id:"1011c108-7074-43b8-aac0-eda3aa4ceeae",
    amount:700,
    description:" Movimiento positivo ",
    movementDate: currentDate
  },
  {
    id:"46d2ea33-2d03-4b39-90c4-2a748cab2d02",
    amount:100,
    description:" Movimiento positivo ",
    movementDate: currentDate
  },
  {
    id:"6d66eeed-18e3-4bb1-a6c7-b93e7e9fd6b4",
    amount:-300,
    description:" Movimiento positivo ",
    movementDate: currentDate
  }
]


export const MovementProvider: React.FC<any> = ({ children }:{children:any}):any => {
  const [movements,setMovements] = React.useState<IMovement[]>([...mockData])

    return (
        <MovementsContextProvider value={{movements, setMovements}}>
          {children}
        </MovementsContextProvider>
      )
}
