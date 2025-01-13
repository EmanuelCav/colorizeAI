'use client'

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";

import Sumbit from "../general/Sumbit";
import MessageAccount from './components/MessageAccount';

import { generateImageApi, saveImageApi } from '@/server/api/image.api';

import { IInput } from '@/interface/Image';

import { FormGeneratePropsType } from '@/types/generate.types';

import { inputSchema } from '@/schema/image.schema';

const FormGenerate = ({ setImageUrl, isLoggedIn, getImage, token, setIsLoading }: FormGeneratePropsType) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(inputSchema)
  })

  const [showWarming, setShowWarming] = useState<boolean>(false);

  const handleGenerate = async (data: IInput) => {

    setIsLoading(true)

    try {

      let dataUpdated: IInput = {
        inputs: `Coloring Book, A black and white drawing of a ${data.inputs}`
      }

      const image = await generateImageApi(dataUpdated)
      const blobUrl = URL.createObjectURL(image)

      setImageUrl(blobUrl)

      if (!isLoggedIn) {
        localStorage.setItem("hasSeenGenerate", "true")
      } else {

        const formData = new FormData()
        formData.append("file", image)
        formData.append("inputs", dataUpdated.inputs)

        const imageData = await saveImageApi(formData, token)
        getImage(imageData)

      }

      reset()

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    if (!isLoggedIn) {
      const hasSeenWarming = localStorage.getItem("hasSeenGenerate");
      if (hasSeenWarming) {
        setShowWarming(true)
      }
    }
  }, [isLoggedIn])

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit((data) => handleGenerate(data))}>
      {
        (showWarming && !isLoggedIn) && <MessageAccount />
      }
      {
        errors.inputs && <p className="text-red-500 text-xs italic mb-2">{errors.inputs.message}</p>
      }
      <textarea id="input" autoFocus autoComplete="off" disabled={showWarming && !isLoggedIn}
        {...register("inputs", { required: true })}
        placeholder="Type something..."
        rows={2}
        className={`block w-full py-3 px-4 border-2 rounded-md focus:outline-none resize-none 
        ${(showWarming && !isLoggedIn) ? "bg-gray-200" : "bg-white"}
        ${errors.inputs ? "border-red-500" : "border-indigo-500"}`}>
      </textarea>
      <Sumbit text="Sumbit" isDisabled={showWarming && !isLoggedIn} />
    </form>
  );
};

export default FormGenerate;
