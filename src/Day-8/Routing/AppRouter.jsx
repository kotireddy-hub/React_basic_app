import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserProfile from './UserProfile';
import NotFound from './NotFound';

const AppRouter =  () => {

/*    const Home = () => {
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
*/

    return (
        <div>
            <h1>App Router</h1>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/user/1">User</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user/:id" element={<UserProfile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;