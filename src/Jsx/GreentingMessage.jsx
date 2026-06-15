const GreetingMessage = () => {

    const name = "Teju";

    const listNames = ["Alice", "Bob", "Charlie"];
    const listItems = listNames.map( (name) => <li key = {name}> {name}</li>);
    const isUlRendered = false;

    return (
        <div>
            <h1>JSX Component</h1>
            <p>This is a simple JSX component.</p>
            <p>Hello {name}!</p>
           { isUlRendered ? (
             <ul>
               {listItems}
             </ul>
           ) : (
            <ol>
                {listItems}
            </ol>
           )}
        </div>
    )
};

export default GreetingMessage;