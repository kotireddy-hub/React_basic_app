function ChildComponent(props) {
    console.log(props, "inside child component")
    return (<div>{props.value}</div>)
};

export default ChildComponent;
