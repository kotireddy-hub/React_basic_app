import React from 'react';
import ParentPropsComponent from './ParentPropsComponent';

class PropsExampleComponent extends React.Component {
    render() {
        return (
            <div>
                <p>Props Example Component loaded on DOM</p>
                <ParentPropsComponent />
            </div>
        )
    }
};

export default PropsExampleComponent;