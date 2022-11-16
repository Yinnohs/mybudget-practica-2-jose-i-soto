// context/todoContext.tsx
import * as React from 'react'
import { IMovement, MovementContextType } from '../types/movement.type';

export const MovementsContext= React.createContext<MovementContextType | null>(null);
export const MovementsContextProvider = MovementsContext.Provider;
const mockData :IMovement[] = []


export const MovementProvider: React.FC<any> = ({ children }:{children:any}):any => {
  const [movements,setMovements] = React.useState<IMovement[]>([...mockData])

    return (
        <MovementsContextProvider value={{movements, setMovements}}>
          {children}
        </MovementsContextProvider>
      )
}
