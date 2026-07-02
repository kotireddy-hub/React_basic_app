# Task - 2 - Implemeted the Home, about, contact pages - July-01-2026
# Task - 3 - Found google page design for Home,Contact and NotFound make the implemeation.
# React Router
   - it is the most popular library
   - this used for React application for routing (navigating one page another / view)

   ## Key Concepts 
    - Routes: 
      - mapping b/w a URL path and a react component.
    - Router / BrowserRouter:
      - The context provider that makes routing work in your application
    - Link:
      - A component to navigate b/w routes.
    - Switch: 
      - Rendes the first route that matches the current URL.
    - Nested Routes: 
      - Routes within routes to handle more complex application.

# Routing work in React
   ## Examples
  - "/"
  - "/about"
  - "/home
  - "/contact

```
To install React Router for a web application, open your project terminal and run npm install react-router-dom
1. Installation CommandsChoose the command that matches the package manager you use for your project:

npm: npm install react-router-dom
Yarn: yarn add react-router-dom
pnpm: pnpm add react-router-dom

2. Verify the InstallationCheck your package.json file. You should see react-router-dom listed under your "dependencies":json"dependencies": {
  "react-router-dom": "^7.18.1",
}
```
- This document for React router Dom 
    - https://reactrouter.com/7.18.1/home

- BrowserRouter(Router)
  - wrapper the application  and provides routing capablities.
- Link 
   - Creating navigation links to different routes / pages(Home, about, etc...)
   - attrubutes "to" we need provide link page example:- to="/home" 
- Routes and Route
   - Defines the different paths ("/", "/home", "/about")
   - attributes are "path" "element" Ex:- path nothing but url ex: path="/hom" element={<component>}
