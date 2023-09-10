import { useCallback, useState } from 'react'
import List from './List';

const HookUseCallback = () => {
    const [counter, setCounter] = useState(0);

    /* const getItemsFromDatabase = () => {
        return ["a", "b", "c"];
    } */
    
    const getItemsFromDatabase = useCallback(() => {
        return ["a", "b", "c"];
    }, []);

    return (
        <div>
            <h2>useCallback</h2>
            <List getItems={getItemsFromDatabase} />
            <button onClick={() => setCounter(counter + 1)}>Alterar o valor</button>
            <p>{counter}</p>
        </div>
    )
}

export default HookUseCallback