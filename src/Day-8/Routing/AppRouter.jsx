import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const AppRouter =  () => {

    const Home = () => {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        );
    }

    const About = () => {
        return (
            <div>
                <h1>About Page</h1>
            </div>
        );
    }

    const Contact = () => {
        return (
            <div>
                <h1>Contact Page</h1>
            </div>
        );
    }


    return (
        <div>
            <h1>App Router</h1>
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;