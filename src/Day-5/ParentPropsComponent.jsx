import React from 'react';
import ChildPropsComponent from './ChildPropsComponent';
import ChildPropsFunctionComponent from './ChildPropsFunctionComponent';

class ParentPropsComponent extends React.Component {
    render() {
        return (
            <div>
                <p>Parent Props Component loaded on DOM</p>
                <ChildPropsComponent  name="John Doe"  age={30}/>
                <ChildPropsFunctionComponent  company="ABC Corp" designation="Software Engineer"/>
            </div>
        )
    }   
};

export default ParentPropsComponent;