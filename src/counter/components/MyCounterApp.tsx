import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {

    const { count, handledAdd, handledSubtract, handledReset } = useCounter(1);
    const { count: counter2  } = useCounter(5);

        //   const [count, setCount] = useState(5);

        //   const handledAdd = () => {
        //     setCount( count + 1 );
        //   }
        //   const handledSubtract = () => {
        //     // setCount( count - 1 );
        //     setCount( prevCount => prevCount - 1 );
        //   }
        //   const handledReset = () => {
        //     setCount( 5 );  
        //   }


  return (
    <>
    {/* (property) React.HTMLAttributes<HTMLDivElement>.style?: React.CSSProperties | undefined*/}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <h1>Counter: { count } - {counter2}</h1>
        <hr />
        <div style={{display:'flex', gap:'10px'}}>
            {/* <button onClick={ () => setCount( count - 1 ) } > -1 </button> */}
            <button onClick={ handledSubtract  } > -1 </button>
            <button onClick={ handledAdd } > +1 </button>
            <button onClick={ handledReset } > Reset </button>
        </div>
    </div>
    </>
  )
}
