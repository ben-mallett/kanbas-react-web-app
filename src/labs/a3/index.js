import Classes from "./classes";
import JavaScript from "./components/javascript";
import PathParameters from "./components/path_params";
import ConditionalOutput from "./conditional";
import Styles from "./styles";
import TodoList from "./todos/todo_list";

function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <JavaScript/>
        <PathParameters/>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <TodoList/>
      </div>
    );
  }
  export default Assignment3;