import React from 'react';

class LifeCyclesMethods extends React.Component {

    constructor(props) {
        console.log("Constructor method is called");
        super(props);
        this.state = {
            name: "React Life Cycles Methods",
            age: 0,
            data: []
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("Get derived state from props method is called");
    //     return {
    //         name: props.name
    //     }
    // }
    shouldComponentUpdate(){
        console.log("Should component update method is called");
        return true;
    }


    componentDidMount() {
        console.log("Component did mount method is called");
        setTimeout(() => {
            this.setState({
                name: "React Life Cycles Methods after 5 seconds",
            })
        }, 5000);

       /* const fetchData = fetch("https://jsonplaceholder.typicode.com/users");
        console.log(fetchData, ":: fetch data");
        fetchData.then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data
                })
            })
            .catch((error) => {
                console.error(error, ":: error");
            });
*/
        /*const promise = new Promise( (res. rej) =>{
         res('is resolved');
     })
         promie.then( (val) => console.log(value))
         .catch( (err) => console.log(err))
         */
    }
    getSnapshotBeforeUpdate() {
        console.log("Get snapshot before update method is called");
       document.getElementById('previous-state').innerHTML = `This previous state`;
       return null;
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did update method is called");
        console.log({ prevProps, prevState, snapshot });
        if(prevState.name !== this.state.name) {
           document.getElementById('current-state').innerHTML = `Yes the state is updated`;
        }
    
    }


    render() {
        console.log("Render method is called");
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>Age: {this.state.age}</p>
                <p id="current-state"></p>
                <p id="previous-state"></p>
                {
                    this.state.data.map((user) => (
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                        </div>
                    ))
                }
            </div>
        )
    }

}

export default LifeCyclesMethods;