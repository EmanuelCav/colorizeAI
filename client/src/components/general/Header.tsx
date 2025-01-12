'use client'

import { useRouter, usePathname } from 'next/navigation';

import ButtonsAuthHeader from "./components/header/ButtonsAuthHeader"
import Logo from "./components/header/Logo"

import { userStore } from '@/server/store/user.store';

const Header = () => {

  const user = userStore()

  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex w-full justify-between items-center py-4 px-8 fixed z-20 bg-indigo-900">
        <Logo />
        <ButtonsAuthHeader router={router} isLoggedIn={user.isLoggedIn} pathname={pathname} />
    </div>
  )
}

export default Header