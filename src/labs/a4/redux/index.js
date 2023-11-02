import React from "react";
import HelloRedux from "./hello_redux";
import CounterRedux from "./counter_redux";
import AddRedux from "./add_redux";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
    </div>
  );
};

export default ReduxExamples;