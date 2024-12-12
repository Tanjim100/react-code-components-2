import { useState } from "react"
import { renderToString } from "react-dom/server";

export default function Counter()
{
    // const [count, setCount] = useState(initial_value);
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return(
        <div style={{border: '2px solid yellow', borderRadius: '10px'}}>
            <h3>Count: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}




// Use of useState() -->
// 1. state management
// 2. conditional rendering 
// 3. Toggle flax(true/false)
// 4. Counter
// 5. Store API data in state