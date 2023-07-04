import { useState } from 'react' //importa só a função useState do React e não tudo.

function AppCounter() {

    const [counter, setCounter] = useState(0);

    return <>
        <h1>A Valuer: {counter}</h1>

        <button onClick={() => {
            setCounter(counter + 1);
        }}>+1</button>
        
        <button onClick={() => {
            setCounter(counter - 1);
        }}>-1</button>
    </>;

}

export default AppCounter;