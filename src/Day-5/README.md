# State VS Props

## State 
1. what is state ?
     - state is an object 
     - State can store any mutable data
     - mutable means chnage the data
     - When updating state in a class component, always use setState() to do so.
     - Using setState() triggers the reconciliation process, which updates state and triggers a re-render of the DOM, containing our newly updated state.
     - setState() batches updates together asynchronously to make React more performant

```
constructor(){
    this.state = {
        name:''
    }
}

for upddate by using 
setState ( 
    {
        name:'test'
    }
)

this.state.name = "test"  // this will not re-render a component:
```

## Props
 - Props are object that hold the values of attributes of a component.
 - and are used to pass data from a parent component to a cild componet.
 - they are read-only, meaning they cannot be modified by the child compnent receiving them.

  1. Immutable:
       - once passed to component props cannot be modified.
  2. Unidirectional Flow:
       - Props are passed from parent component to child 
       - maintaining a unidirectional data flow
        