import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/generate" className="flex justify-center items-center">
      <Image
        alt="Logo Colorize Ai"
        src="/logo.png"
        width={48}
        height={48}
      />
      <p className="text-white font-semibold text-md">Colorize AI</p>
    </Link>
  )
}

export default Logo