import Classes from "./classes";
import JavaScript from "./components/javascript";
import PathParameters from "./components/path_params";
import ConditionalOutput from "./conditional";
import Styles from "./styles";
import { useSelector } from "react-redux";
function Assignment3() {
  const { todos } = useSelector((state) => state.todoreducer);
  return (
    <div>
      <h2>Assignment 3</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
        <JavaScript/>
        <PathParameters/>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
      </div>
    );
  }
  export default Assignment3;