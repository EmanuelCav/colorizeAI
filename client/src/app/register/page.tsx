import InputForm from "@/components/general/InputForm"
import QuestionAuth from "@/components/general/QuestionAuth"
import Sumbit from "@/components/general/Sumbit"

const Register = () => {
    return (
        <div className="w-full h-screen justify-center items-center flex flex-col">
            <p className="text-indigo-800 text-3xl font-semibold">Welcome! Create an account</p>
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-2">
                <InputForm autoComplete="on" autoFocus={true} id="Username" max={22} name="username" type="text" register="" />
                <InputForm autoComplete="off" autoFocus={false} id="Email" max={50} name="email" type="text" register="" />
                <InputForm autoComplete="off" autoFocus={false} id="Password" max={50} name="password" type="password" register="" />
                <InputForm autoComplete="off" autoFocus={false} id="Confirm Password" max={50} name="confirm" type="password" register="" />
                <QuestionAuth action="Sign in" question="Have already an account?" route="/login" />
                <Sumbit text="Sign up" />
            </form>
        </div>
    )
}

export default Register