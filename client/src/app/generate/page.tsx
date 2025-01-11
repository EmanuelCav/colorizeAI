import InputForm from "@/components/generate/InputForm"
import TitleGenerate from "@/components/generate/TitleGenerate"

const Generate = () => {
    return (
        <div className="h-screen ml-64 justify-center items-center flex flex-col">
            <TitleGenerate />
            <InputForm />
        </div>
    )
}

export default Generate