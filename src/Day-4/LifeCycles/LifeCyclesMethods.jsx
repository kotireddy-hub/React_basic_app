import React from 'react';

class LifeCyclesMethods extends React.Component {

    constructor(props){
        console.log("Constructor method is called");
        super(props);
        this.state = {
            name: "React Life Cycles Methods",
            age: 0
        }
    }

    static getDerivedStateFromProps(props, state){
    console.log("Get derived state from props method is called");
      return {
        name: props.name
      }
    }

    componentDidMount(){
        console.log("Component did mount method is called");
        setTimeout(() => {
            this.setState({
                age: 1
            })
        }, 5000);
    }


    render(){
        console.log("Render method is called");
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>Age: {this.state.age}</p>
            </div>
        )
    }

}

export default LifeCyclesMethods;