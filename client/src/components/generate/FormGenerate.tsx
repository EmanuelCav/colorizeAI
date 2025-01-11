import Sumbit from "../general/Sumbit";

const FormGenerate = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
      <textarea name="input" id="input" autoFocus autoComplete="off" 
      placeholder="Type something..."
      rows={2}
      className="block w-full py-3 px-4 border-2 border-indigo-500 rounded-md focus:outline-none resize-none	">
      </textarea>
      <Sumbit text="Sumbit" />
    </form>
  );
};

export default FormGenerate;
