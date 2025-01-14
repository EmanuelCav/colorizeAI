'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ButtonsAuthHeader from "./components/header/ButtonsAuthHeader"
import Logo from "./components/header/Logo"
import Menu from './components/header/Menu';

import { userStore } from '@/server/store/user.store';
import { messageApi } from '@/server/api/user.api';

const Header = () => {

  const user = userStore()

  const [isMenu, setIsMenu] = useState<boolean>(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    (async () => {
      await messageApi()
    })()
  }, [])

  return (
    <div className="flex w-full justify-between items-center py-4 px-8 fixed z-20 bg-indigo-900">
      {
        isMenu && <Menu setIsMenu={setIsMenu} router={router}
          isLoggedIn={user.isLoggedIn} logout={user.logoutUser} />
      }
      <Logo />
      <ButtonsAuthHeader router={router} isLoggedIn={user.isLoggedIn} pathname={pathname}
        setIsMenu={setIsMenu} isMenu={isMenu} logout={user.logoutUser} />
    </div>
  )
}

export default Header