import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "../../Redux/shopSlicer";

function Counter() {
  const obj = useSelector((state) => state.obj.obj);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementAction(5));
  };
  const decrement = () => {
    dispatch(decrementAction(5));
  };

  return (
    <div>
      <div>counter</div>
      <h1>{obj.counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
export default Counter;
