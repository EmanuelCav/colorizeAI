
const Sumbit = ({ text }: { text: string }) => {
    return (
        <button
            type="submit"
            className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200 font-semibold"
        >
            {text}
        </button>
    )
}

export default Sumbit