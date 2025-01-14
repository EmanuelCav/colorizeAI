import Image from "next/image"

const Loading = ({ text }: { text: string }) => {
    return (
        <div className="bg-white top-0 left-0 fixed w-full h-screen z-10 flex flex-col justify-center items-center">
            <Image src="/loading.gif" alt="loading..." width={400} height={400} />
            <p className="text-indigo-500 font-semibold text-xl">{text}</p>
        </div>
    )
}

export default Loading