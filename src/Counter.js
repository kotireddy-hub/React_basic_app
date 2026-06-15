import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h2>Counter Component</h2>
            <p> Counter : {count}</p>
            <button onClick = { () => setCount(count + 1)} > Increment </button>
        </div>
    )
}

export default Counter;