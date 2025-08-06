import {useState } from 'react'

export const useCounter = (initialValue: number = 10) => {
  const [count, setCount] = useState(initialValue);

  const handledAdd = () => {
    setCount( count + 1 );
  }
  const handledSubtract = () => {
    setCount( prevCount => prevCount - 1 );
  }
  const handledReset = () => {
    setCount(initialValue );
  }

  return {
    //values
    count,
    //functions
    handledAdd,
    handledSubtract,
    handledReset
  }
}


export const useCounter2 = () => { 
    return [];
}

export const useCounter3 = (arg: string) => { 
    // return [arg, 'Hello World'];
    // return [arg, () => 'Hello World'];
    // return [arg, () => `Hello ${arg}`];
    // return [arg, (name: string) => `Hello ${name}`];
    // return [arg, (name: string) => `Hello ${name} from useCounter3`];
    return [arg, () => {}];

}
export const useCounter4 = (arg: string, arg2: number) => { 
    return [arg, arg2];
}