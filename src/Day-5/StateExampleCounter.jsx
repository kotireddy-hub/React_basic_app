import React, { Component } from 'react';

class StateExampleCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

   /* handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }*/

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                {/* <button onClick={this.handleClick}> Click Me!</button> */}
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}> Click Me!</button>
            </div>
        )
    }
};

export default StateExampleCounter;