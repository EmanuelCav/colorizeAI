import FormGenerate from "@/components/generate/FormGenerate"
import TitleGenerate from "@/components/generate/TitleGenerate"

const Generate = () => {
    return (
        <div className="h-screen ml-64 justify-center items-center flex flex-col">
            <TitleGenerate />
            <FormGenerate />
        </div>
    )
}

export default Generate