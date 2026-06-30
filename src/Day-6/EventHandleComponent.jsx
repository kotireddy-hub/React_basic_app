import FormComponent from "../Day-6/FormComponent";
import ClassBindingEventHandlerComponent from "./ClassBindingEventHandlerComponent";
import FormBasedComponent from "./FormBasedComponent";

function EventHandleComponent() {

    
    const handleClick = () => {
        console.log("Button Clicked!");
    }
    const showMessage = (message) => {
        console.log(message);
    }

    return(
        <div>
            <h1> Handling Events In React </h1>
            <FormComponent />
            <button onClick = { handleClick }> Click Me! </button>
            <button onClick={() => showMessage("Hello, React!")}> Click Show Message!</button>
            <ClassBindingEventHandlerComponent />
            <FormBasedComponent />
        </div>
    )
    
};

export default EventHandleComponent;