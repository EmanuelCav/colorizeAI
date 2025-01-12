'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/navigation';

import InputForm from "@/components/general/InputForm"
import QuestionAuth from "@/components/general/QuestionAuth"
import Sumbit from "@/components/general/Sumbit"

import { ILogin } from '@/interface/User';

import { userStore } from '@/server/store/user.store';
import { loginApi } from '@/server/api/user.api';

import { loginSchema } from '@/schema/user.schema';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const router = useRouter()

    const { authUser } = userStore()

    const handleLogin = async (data: ILogin) => {

        try {

            const loginData = await loginApi(data)
            authUser(loginData)
            router.push('/generate')
            reset()

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="w-full h-screen justify-center items-center flex flex-col">
            <p className="text-indigo-800 text-3xl font-semibold text-center">Welcome Again!</p>
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-2" onSubmit={handleSubmit((data) => handleLogin(data))}>
                <InputForm autoComplete="on" autoFocus={false} label="Email" max={50} name="email" type="text"
                    errors={errors.email!} register={register("email", { required: true })} />
                <InputForm autoComplete="off" autoFocus={false} label="Password" max={50} name="password" type="password"
                    errors={errors.password!} register={register("password", { required: true })} />
                <QuestionAuth action="Sign up" question="Don't have an account?" route="/register" />
                <Sumbit text="Sign in" />
            </form>
        </div>
    )
}

export default Login