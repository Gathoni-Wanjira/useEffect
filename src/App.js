import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [ResourceType, setResourceType] = useState('posts')

    console.log("Render")

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${ResourceType}`)
            .then(response => response.json())
            .then(json => console.log(json))
    }, [ResourceType])
    return (
        <>
            <div >
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>

            </div>
            <h1>{ResourceType}</h1>
        </>
    );
}

export default App;
