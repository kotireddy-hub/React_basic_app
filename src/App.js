import './App.css';
//3. separation of component into different files for better maintainability and reusability
import Content from './Day-3/React-components/Content/Content';
import Header from './Day-3/React-components/Header/Header';
import Footer from './Day-3/React-components/Footer/Footer';
import Welcome from './Day-3/React-components/ClassBasedComponent/Welcome';
// import Header from './header';
// import Button from './Button';
// import ParentComponent from './ParentComponent';
// import GreetingMessage from '../src/Jsx/GreentingMessage';
// import ReuseableButton from './Day-3/React-components/ReuseableButton';
import ConditionallyRenderingComponent from './Day-7/ConditionallRenderingComponent';

/*
// Maintainabilty and Reusability of the code
function Header() {
    return (
        <h1 style={{ backgroundColor: 'red', height: '50px' }}> This is a React sample App</h1>
    )
}

function Content() {
    return (
        <p style={{ backgroundColor: 'blue', height: '500px' }}> This is a sample content for the React App</p>
    )
}

function Footer() {
    return (
        <p style={{ backgroundColor: 'yellow', height: '50px' }}> This is a sample footer for the React App</p>
    )
}*/

function App() {
  return (
    <div className="App">
      {/* <Header />
      <ParentComponent />
      <Button label="Click me" /> 
      <Button label="Submit"  />  */}
      {/* <GreetingMessage />
      // Reusabilty of the button component
      <ReuseableButton message="Hello, I'm a reusable button!" />
      <ReuseableButton message="Welcome!" />
      <ReuseableButton message="Hello World!" /> */}
      {/* <headers> 
        <h1 styles={{ backgroundColor: 'red', height: '50px' }}> This an React sample App</h1>
      </headers>
      <content>
        <p styles={{ backgroundColor: 'blue', height: '500px' }}> This is a sample content for the React App</p>
      </content>
      <footer>
        <p styles={{ backgroundColor: 'yellow', height: '50px' }}> This is a sample footer for the React App</p>
      </footer> */}
      {/* <Welcome /> */}
        {/* <Header /> */}
        <Content />
        <ConditionallyRenderingComponent  isLoggedIn={true} />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
