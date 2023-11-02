import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counter_reducer";

function CounterRedux() {
  const { count } = useSelector((state) => state.counter_reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>
        Increment </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement </button>
    </div>
  );
}
export default CounterRedux;