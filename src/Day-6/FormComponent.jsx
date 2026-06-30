function FormComponent () {

    const handleNameChange = (e) => {
        console.log("Name Changed: ", e);
        console.log( "Name Changed: ", e.target.value);
    }

    return(
        <div>
            <h1>Form Component</h1>
            <input type="text" placeholder="Enter your name" onChange = { (e) => handleNameChange(e)}/>
        </div>
    )
};

export default FormComponent;