import { useEffect, useState } from "react"

export default function User()
{
    const [users, setUsers] = useState([]);

    // useEffect(function, dependencyList)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}


/* 
    * 1. declare a state to hold the data (useSate declareing)
    * 2. use effect with callback function and dependecy array
    * 3. use fetch to load the data
    *  * */


// Effect -> setting up server connection 

// Side effect of React 
// -> not predictable
// -> action performed with 'outside world'
// -> when we need to reach outside the scope of component