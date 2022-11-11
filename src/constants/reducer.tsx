// context/todoContext.tsx
import * as React from 'react';
import { v4 } from 'uuid';
import { IMovement, MovementContextType } from '../types/movement.type';

export const MovementsContext= React.createContext<MovementContextType | null>(null);
export const MovementsContextProvider = MovementsContext.Provider;


export const MovementProvider: React.FC<any> = ({ children }:{children:any}):any => {
  const [movements,setMovements] = React.useState<IMovement[]>([])
  // const saveMovement = ({description,amount}:IMovement)=>{
  //   const currentDate = new Date()
  //   const newMovement: IMovement ={
  //           id: v4(),
  //           amount:amount,
  //           description:description,
  //           movementDate: currentDate
  //       }
  //       setMovements((lastState)=> [...lastState, newMovement] )
  //   }

    return (
        <MovementsContextProvider value={{movements, setMovements}}>
          {children}
        </MovementsContextProvider>
      )
}
