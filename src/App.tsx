import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="h-screen overflow-auto flex justify-center items-center">
      <div>
        <div>
          <h1 className="text-6xl font-bold text-center">{count}</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-8">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 bg-green-600 font-semibold text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 bg-red-600 font-semibold text-white"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-6 py-2 bg-purple-600 font-semibold text-white col-span-2"
          >
            Increment By 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
