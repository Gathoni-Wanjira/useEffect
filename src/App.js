import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [ResourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

   

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${ResourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [ResourceType])
    return (
        <>
            <div >
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>

            </div>
            <h1>{ResourceType}</h1>

            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>

            })}
        </>
    );
}

export default App;
