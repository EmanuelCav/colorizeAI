import Image from "next/image"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const Logo = ({ router }: { router: AppRouterInstance }) => {
  return (
    <Image 
        alt="Logo Colorize Ai"
        src="/next.svg"
        width={50}
        height={50}
    />
  )
}

export default Logo