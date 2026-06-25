import LifeCyclesMethods from "../../../Day-4/LifeCycles/LifeCyclesMethods";
import StateExampleCounter from "../../../Day-5/StateExampleCounter";
import PropsExampleComponent from "../../../Day-5/PropsExampleComponent";

function Content() {
    return (
        <div>
            {/* <p style={{ backgroundColor: 'blue', height: '500px' }}> This is a sample content for the React App</p> */}
            {/* <LifeCyclesMethods name={"React Life Cycles Methods By passing props"} /> */}
            <StateExampleCounter />
            <PropsExampleComponent />
        </div>
    )
};

export default Content;