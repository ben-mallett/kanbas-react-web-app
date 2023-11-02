import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../components/module_list/modulereducer";


const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;