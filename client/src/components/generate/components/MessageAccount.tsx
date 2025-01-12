import Link from "next/link"

const MessageAccount = () => {
  return (
    <div className="my-2 flex items-center justify-center">
        <p className='text-indigo-500 text-md ml-1'>Create an account to continue using</p>
        <Link className="ml-2 text-indigo-500 text-lg font-semibold hover:underline active:no-underline" href="/register">Sign up</Link>
    </div>
  )
}

export default MessageAccount