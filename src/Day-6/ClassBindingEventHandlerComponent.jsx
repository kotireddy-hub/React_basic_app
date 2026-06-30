import React from "react";

class ClassBindingEventHandlerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (){
        console.log("Class Binding Button Clicked!", this);
    }   

    handleArrowClick = () => {
        console.log("Arrow Function Button Clicked!", this);
    }


    render () {
        return(
            <div>
                <h1>Class Binding Event Handler Component</h1>
                <button onClick= {this.handleClick} > Click Binding!</button>
                <button onClick= {this.handleArrowClick} > Arrow Click Binding!</button>
            </div>
        )
    }

};

export default ClassBindingEventHandlerComponent;