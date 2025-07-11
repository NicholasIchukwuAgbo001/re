const Login = () => {

  return (
    <form
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-6"
    >
      <div>
        <label htmlFor="firstName" className="block mb-1 font-medium text-gray-700">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
