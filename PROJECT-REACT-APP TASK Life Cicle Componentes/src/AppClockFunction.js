import { useState } from 'react';
import ClockFunction from './ClockFunction';


export default function AppClockFunction() {
        const [show, setShow] = useState(false);

        return <>
                {show && <ClockFunction />}
                <br/>
                <button onClick={
                        () => setShow(!show)
                }>
                        { show ? 'Esconder B' : 'Mostrar B'}
                </button>
        </>
}