import React from 'react';

class ChildPropsComponent extends React.Component {
    render() {
        const  { name, age } = this.props;
        return (
            <div>
                <p>Child Props Component loaded on DOM</p>
                {/* <p> Name: {this.props.name}</p>
                <p> Age: {this.props.age}</p> */}
                <p> Name: {name}</p>
                <p> Age: {age}</p>
            </div>
        )
    }

};

export default ChildPropsComponent;
