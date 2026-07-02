import Dashboard from "./Dashboard";

const Login = ( { isDashboardLoaded } ) => {

    return (
        <div>
            <h1>Login Page</h1>
            <label htmlFor="YourEmail">Your Email:</label>
            <input type="email" id="YourEmail" name="YourEmail" placeholder="Enter Your Email" />
            <br />
            <label htmlFor="YourPassword">Your Password:</label>
            <input type="password" id="YourPassword" name="YourPassword" placeholder="Enter Your Password" />
            <br />
            <button type="submit">Get Started</button>
            {
                isDashboardLoaded && <Dashboard />
            }
        </div>
    );
};

export default Login;