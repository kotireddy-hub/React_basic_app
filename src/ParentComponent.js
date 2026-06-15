import ChildComponent from './ChildComponent';

function ParentComponent() {
    const message  = "Hello to Child omponent"
    return (
        <div>
            <ChildComponent  value = {message }/>
        </div>
    )
};

export default ParentComponent;