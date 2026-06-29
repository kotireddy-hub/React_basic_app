function EventHandleComponent() {

    const handleClick = () => {
        console.log("Hello");
    }

    return(
        <div>
            <h1> Handling Events In React </h1>
            <button onClick={ handleClick}> Click Me!</button>
        </div>
    )
    
};

export default EventHandleComponent;