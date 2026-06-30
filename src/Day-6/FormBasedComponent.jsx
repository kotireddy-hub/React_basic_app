function FormBasedComponent() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted!");
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Enter Your Email" />
            <button type="submit"> Submit</button>
        </form>
    )
};

export default FormBasedComponent;