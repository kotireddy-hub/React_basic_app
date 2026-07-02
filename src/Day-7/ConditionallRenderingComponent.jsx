import Login from "./Login";
import Register from "./Register";

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
            {isLoggedIn ? <Login  isDashboardLoaded={true} /> : <Register />}
        </div>
    )
};

export default ConditionallyRenderingComponent;