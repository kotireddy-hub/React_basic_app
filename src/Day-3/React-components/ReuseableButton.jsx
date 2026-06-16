// const props = { message: "Hello, I'm a reusable button!" }
// { message } 

function ReuseableButton ({ message }){
    // props : { message: "Hello, I'm a reusable button!" }
    return (
        <div>{message}</div>
    )
}

export default ReuseableButton;