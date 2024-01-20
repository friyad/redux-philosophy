import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="h-screen overflow-auto flex justify-center items-center">
      <div>
        <div>
          <h1 className="text-4xl text-center">{count}</h1>
        </div>
        <div className="flex justify-center items-center gap-2 mt-3">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 bg-green-500 text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 bg-red-500 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
