//const ChildPropsFunctionComponent = (props) => {
// const ChildPropsFunctionComponent = (props) => {

//     const { company, designation } = props;

const ChildPropsFunctionComponent = ( { company, designation } ) => {

    return (
        <div>
            <p>Child Props Function Component loaded on DOM</p>
            {/* <p> Company: {props.company}</p>
            <p> Designation: {props.designation}</p> */}
            <p> Company: {company}</p>
            <p> Designation: {designation}</p>
        </div>
    )
};

export default ChildPropsFunctionComponent;