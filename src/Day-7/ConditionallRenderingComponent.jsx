const ConditionallyRenderingComponent = ({ isLoggedIn }) => {
    //    if(isLoggedIn) {
    //        return <h1>Welcome user!</h1>
    //    }else{
    //        return <h1>Please log in.</h1>
    //    }

    return (
        <div>
            <h1>Conditional Rendering in React</h1>
            {/* condtion ? 'true' : 'false' */}
            {isLoggedIn ? <h2>Welcome user!</h2> : <h2>Please log in.</h2>}
        </div>
    )
};

export default ConditionallyRenderingComponent;