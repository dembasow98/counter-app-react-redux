import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";


const counterStore = createStore(counterReducer);

//Display the current state of the store in the console
counterStore.subscribe(() => console.log(counterStore.getState()));

export default counterStore;