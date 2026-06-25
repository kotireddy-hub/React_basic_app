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
      - you can aslo use this method to call extrenal data from the API.
      ```
      const data = [
        {
            "id": 1,
            "name": "Leanne Graham",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        }
    ]

    - Call smple api
    fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  ## Methods
  1. GET     - While GET requests are used for retrieving data,
  2. POST    - POST requests are used to send data to a server. This is commonly used when submitting forms or sending data to create a new resource
  3. PUT
  4. Delet

  https://www.freecodecamp.org/news/how-to-fetch-data-from-an-api-using-the-fetch-api-in-javascript/
  ```
      

2. Updating
   - When a component is bening re-render due to changes in props or state.
   ## Method
   1. static getDerivedStateFromProps()
       - right before rendering thr element in our DOM.
       - it takes props and state as an argument and returns an object with changs to the state.
   2. shouldComponentUpdate()
       - when you want your state or props to update or not.
       - This method returns a boolean value that specifies whether rendering should be done or not.
       - The default value is false.
   3. render()
       - compulsory method required by the react.
       - This method is responise to render our JSX to DOM
   4. getSnapshotBeforeUpdate()
       - before updating the DOM.
       - It has access to props and state before the update.
       - Here you can check what was the value of your props or state before its update.
       - componentDidUpdate() should be included otherwise we will get an error.
   5. componentDidUpdate()
3. UnMounting
   - when a component is removed from the DOM.
   ## Method
   1. componentWillUnMount()
     - If there are any cleanup actions  like canceling API call or clearing any cache in storage.

## Links
- https://www.freecodecamp.org/news/react-component-lifecycle-methods/
- https://medium.com/@nishranasar/react-lifecycle-methods-436aa3a86194
