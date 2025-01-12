'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/navigation';

import InputForm from "@/components/general/InputForm"
import QuestionAuth from "@/components/general/QuestionAuth"
import Sumbit from "@/components/general/Sumbit"

import { IRegister } from '@/interface/User';

import { userStore } from '@/server/store/user.store';
import { registerApi } from '@/server/api/user.api';

import { registerSchema } from '@/schema/user.schema';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const router = useRouter()

    const { authUser } = userStore()

    const handleRegister = async (data: IRegister) => {

        try {

            const registerData = await registerApi(data)
            authUser(registerData)
            router.push('/generate')
            reset()

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="w-full h-screen justify-center items-center flex flex-col">
            <p className="text-indigo-800 text-3xl font-semibold text-center">Welcome! Create an account</p>
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-2" onSubmit={handleSubmit((data) => handleRegister(data))}>
                <InputForm autoComplete="off" autoFocus={true} label="Username" max={22} name="username" type="text" 
                register={register("username", { required: true })} errors={errors.username!} />
                <InputForm autoComplete="on" autoFocus={false} label="Email" max={50} name="email" type="text" 
                register={register("email", { required: true })} errors={errors.email!} />
                <InputForm autoComplete="off" autoFocus={false} label="Password" max={50} name="password" type="password" 
                register={register("password", { required: true })} errors={errors.password!} />
                <InputForm autoComplete="off" autoFocus={false} label="Confirm Password" max={50} name="confirm" type="password" 
                register={register("confirm", { required: true })} errors={errors.confirm!} />
                <QuestionAuth action="Sign in" question="Have already an account?" route="/login" />
                <Sumbit text="Sign up" isDisabled={false} />
            </form>
        </div>
    )
}

export default Register