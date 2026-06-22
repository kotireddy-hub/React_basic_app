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
