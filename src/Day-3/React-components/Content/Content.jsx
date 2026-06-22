import LifeCyclesMethods from "../../../Day-4/LifeCycles/LifeCyclesMethods";

function Content() {
    return (
        <div>
            <p style={{ backgroundColor: 'blue', height: '500px' }}> This is a sample content for the React App</p>
            <LifeCyclesMethods name={"React Life Cycles Methods By passing props"} />
        </div>
    )
};

export default Content;