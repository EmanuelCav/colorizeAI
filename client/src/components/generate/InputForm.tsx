
const InputForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
      <input
        type="text"
        id="input"
        name="input"
        placeholder="Type something..."
        className="block w-full py-3 px-4 border-2 border-indigo-500 rounded-md focus:outline-none"
      />
      <button
        type="submit"
        className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200 font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
