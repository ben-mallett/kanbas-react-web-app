import { configureStore } from "@reduxjs/toolkit";
import helloredux from "../a4/redux/hello_redux/helloredux";
import counter_reducer from "../a4/redux/counter_redux/counter_reducer";
import add_reducer from "../a4/redux/add_redux/add_reducer";
import todoreducer from "../a4/redux/todo/todoreducer";

const store = configureStore({
  reducer: {
    helloredux,
    counter_reducer,
    add_reducer,
    todoreducer
  },
});
export default store;