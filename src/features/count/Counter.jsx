import { Link } from "react-router";
import { increment, decrement, reset } from "./CounterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
<div className="flex flex-col items-center gap-6 p-8">
  <div className="flex gap-4">
    <button 
      className="bg-red-400 hover:bg-red-500 text-white font-bold px-4 py-2 rounded transition"
      onClick={() => dispatch(decrement())}
    >
      -
    </button>

    <h1 className="text-xl font-semibold">Count: {count}</h1>

    <button 
      className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded transition"
      onClick={() => dispatch(increment())}
    >
      +
    </button>
  </div>

  <button 
    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded transition"
    onClick={() => dispatch(reset())}
  >
    Reset
  </button>

  <div className="flex gap-4 mt-4">
    <Link 
      to="/login" 
      className="text-blue-600 underline hover:text-blue-800 transition"
    >
      Login
    </Link>

    <Link 
      to="/signup" 
      className="text-blue-600 underline hover:text-blue-800 transition"
    >
      Signup
    </Link>
  </div>
</div>
  );
};

export default Counter;
