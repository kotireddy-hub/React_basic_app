function Button(props) {
    console.log('Button props:', props); // Debugging line to check props
    //object  props = {
    //  label: "Click me"
    //}
    //props.label 

  return (
    <button>
      {props.label}
    </button>
  );
}

export default Button;