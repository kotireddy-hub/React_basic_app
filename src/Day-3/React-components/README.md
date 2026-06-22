# component
1. class component
2. functional component

## Class component
```
class MyComponent extend React.Component{
 render(
    return (
        <div>Hello </div>
    )
 )
}
```
## Function compoent 
```
function MyComponent(){
    return (
        <div>Hello </div>
    )
}
```
1. Reusabilty 
2. Maintainabilty
3. separation of component 



### diff function vs class 
1. syntax 
```
function
function MyComponent(){
    return (
        <div>Hello </div>
    )
}

class 
class MyComponent extend React.Component{
 render(
    return (
        <div>Hello </div>
    )
 )
}
```
1. Syntax 
```
function
function MyComponent(){
    return (
        <div>Hello </div>
    )
}

class 
class MyComponent extend React.Component {
 render(
    return (
        <div>Hello </div>
    )
 )
}
```
2. Statement management
```
function - uses Hooks - useState
class - setState -update  , this.state - store
```
3. Performance
  - function - More lightweight, fast
  - class - larger weigth, slower

4. Context API 
   - function - consume content using useContext hook
   - class - consume content using the consumer component or context type
  
5. Code Reuseabilty 
   - funtion - Highly resuable with Hooks
   - class   - Limited is reusing stateful logic
6. LifeCycle Methods
   - function - Uses useEffect hook for managing lifecycle event
   - class    - Has built-in lifeCycle 


### component life cycle method  - class based componnt 
1. Mounting
2. Updating
3. UnMounting

1. Mounting 
  - When a component is being created and inserted into the DOM.
  ## Methods
   1. Constructor()  
       - when the component is initiated and it's the best place to initialize our state.
       - the construtor method takes props as an argument and starts by calling super(props)

   2. static getDerivedStateFromProps() 
       - right before rendering thr element in our DOM.
       - it takes props and state as an argument and returns an object with changs to the state.

   3. render() 
       - compulsory method required by the react.
       - This method is responise to render our JSX to DOM

   4. componentDidMount()
      - after the component is rendered.
      - you can aslo use this method to calll extrenal data from the API.
      

2. Updating
   - When a component is bening re-render due to changes in props or state.
   ## Method
   1. static getDerivedStateFromProps()
   2. shouldComponentUpdate()
   3. render()
   4. getSnapshotBeforeUpdate()
   5. componentDidUpdate()
3. UnMounting
   - when a component is removed from the DOM.
   ## Method
   1. componentWillUnMount()

