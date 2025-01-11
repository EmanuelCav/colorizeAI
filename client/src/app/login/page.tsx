import InputForm from "@/components/general/InputForm"
import QuestionAuth from "@/components/general/QuestionAuth"
import Sumbit from "@/components/general/Sumbit"

const Login = () => {
    return (
        <div className="w-full h-screen justify-center items-center flex flex-col">
            <p className="text-indigo-800 text-3xl font-semibold">Welcome Again!</p>
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-2">
                <InputForm autoComplete="on" autoFocus={false} id="Email" max={50} name="email" type="text" register="" />
                <InputForm autoComplete="off" autoFocus={false} id="Password" max={50} name="password" type="password" register="" />
                <QuestionAuth action="Sign up" question="Don't have an account?" route="/register" />
                <Sumbit text="Sign in" />
            </form>
        </div>
    )
}

export default Login