# JSX
## what is jsx?
 ``` jsx is a synatax extension for javascript that looks similar to HTML
 jsx javascript XML
 ```

 ### why use JSX in react ?
 1. Readability : wiritng code in HTML
 2. Simplicity: making deveploment is faster
 3. Fewer Errors: error message 

 ### JSX VS Regular javascript

#### Regular javascript
 ```
 const element = React.createElement('h1', {}, 'hello');
 ```
 ### JSX
```
const element = <h1> Hello </h1>
```

### Basic Rules of JSX i Recat
1. Return a single parent element

```
correct format
return (
    <div>
    <h1> Hello </h1>
    <p> Hello wolrd </p>
    </div>
)

Incorrect format 
return(
    <h1>Hello</h1>
    <p>hello</p>
)

```
2. use Curly brases for javascription expersion

```
const myComponent = () => {

    const name = "Hi";

    return (
        <div> My name is {name} </div>
    )
}
export default myComponent
```

3. Self-Closing tags ( <img /> && <imput /> && <br />)

```
const myComponent = () => {

    const name = "Hi";

    return (
        <div> My name is {name} 
        <img src="name.png" alt="Profile Icon" title="Profile Icon" />
        </div>
    )
}
export default myComponent
```
4. class VS className
```
HTML
<h1 class="hello"> Hello World</h1>

React JS 
<h1 className="Hello"> Hello World</h1>

const myComponent = () => {

    const name = "Hi";

    return (
        <div className="greeting"> My name is {name} </div>
    )
}
export default myComponent
```
5. Expression In JSX
```
const myComponent = () => {

    const numbers = [1,2,3,4,5];
    const listItem = numbers.map( (number) => <li key={number}> {number} </li>);

    const name = "Hi";

    return (
        <div className="greeting"> My name is {name}
        <ul>
        {listItem}
        </ul> 
        </div>
    )
}
export default myComponent
```
6. Conditional Rendering JSX/JS
```
<div>
{
 variableName ? true : false
}
</div>
```


