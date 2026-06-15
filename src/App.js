import './App.css';
import Header from './header';
import Button from './Button';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <ParentComponent />
      <Button label="Click me" /> 
      <Button label="Submit"  /> 
    </div>
  );
}

export default App;
