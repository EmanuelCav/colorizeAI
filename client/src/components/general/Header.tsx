'use client'

import { useRouter, usePathname } from 'next/navigation';

import ButtonsAuthHeader from "./components/header/ButtonsAuthHeader"
import Logo from "./components/header/Logo"

const Header = () => {

  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex w-full justify-between items-center py-4 px-8 fixed z-20 bg-indigo-900">
        <Logo router={router} />
        <ButtonsAuthHeader router={router} pathname={pathname} />
    </div>
  )
}

export default Header