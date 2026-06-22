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

## Links
- https://www.freecodecamp.org/news/react-component-lifecycle-methods/
- https://medium.com/@nishranasar/react-lifecycle-methods-436aa3a86194
