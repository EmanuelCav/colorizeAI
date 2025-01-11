import Link from "next/link"

import { QuestionAuthPropsType } from "@/types/props.types"

const QuestionAuth = ({ question, action, route }: QuestionAuthPropsType) => {
    return (
        <div className="flex items-center my-4 w-full">
            <p className="text-md">{question}</p>
            <Link className="font-bold text-md text-indigo-500 hover:underline active:no-underline ml-2" href={route}>{action}</Link>
        </div>
    )
}

export default QuestionAuth