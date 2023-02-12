## Basic redux with react implementation:
### What is redux?
Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

### Packages to install:
- [x] Install redux:
```bash	
npm install redux
```
- [x] Install react-redux:
```bash
- [x] npm install react-redux
```

### Steps to follow:
- [x] Create a store:
A store is the object that brings together the state, and the actions. It is the object that is made available to your entire application. It is the single source of truth when it comes to your application's state.
- [x] Create a reducer:
A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change.
- [x] Create an action:
An action is a plain JavaScript object that has a type property. The type property should be a string that gives the action a descriptive name, like 'todos/todoAdded' or 'counter/incremented'. By convention, we like to write type strings as 'domain/eventName', where the domain is the feature or category that this action belongs to. We can then group our actions by their type.
In a nutshell: you describe what you want to do in an action.
[x] Create a dispatch:
A dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
- [x] Create a subscribe:
A subscribe is a function of the Redux store. You call store.subscribe to register a callback that the Redux store will call any time an action has been dispatched so you can update the UI of your application to reflect the current application state.
- [x] Create a getState:
A getState is a function of the Redux store. You call store.getState to get the current state value inside the store. This can be useful when you want to get the current state so that you can use it in some other part of your application.



