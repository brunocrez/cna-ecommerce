import { useState } from 'react'
import { Input } from './ui/input'
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
  UserCircleIcon,
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { Separator } from './ui/separator'
import { Menu } from './menu'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClickMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <>
      {/* screens over 1024px */}
      <div className="hidden lg:flex bg-slate-900 relative px-3 py-6">
        <div className="w-full max-w-[1536px] mx-auto">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Bars3Icon
                className="size-8 text-white cursor-pointer self-center"
                onClick={handleClickMenu}
              />
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="hidden sm:block rounded-md"
                />
                <span className="text-white font-bold">Simple E-Commerce</span>
              </div>
              <Input
                type="text"
                placeholder="Buscar um produto"
                className="w-full max-w-[692px] flex-1"
              />
            </div>
            <div className="flex items-center gap-7 text-gray-300">
              <UserIcon className="size-8 cursor-pointer" />
              <ShoppingCartIcon className="size-8 cursor-pointer" />
              <HeartIcon className="size-8 cursor-pointer" />
              <ShoppingBagIcon className="size-8 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* max-width: 1024px */}
      <div className="hidden lg:hidden md:flex flex-col gap-4 bg-slate-900 relative px-3 py-5">
        <div className="flex justify-between items-center">
          <Bars3Icon
            className="size-8 text-white cursor-pointer"
            onClick={handleClickMenu}
          />
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="hidden sm:block rounded-md"
            />
            <span className="text-white font-bold">Simple E-Commerce</span>
          </div>
          <div className="flex items-center gap-6 text-gray-300">
            <UserIcon className="size-8 cursor-pointer" />
            <ShoppingCartIcon className="size-8 cursor-pointer" />
            <HeartIcon className="size-8 cursor-pointer" />
            <ShoppingBagIcon className="size-8 cursor-pointer" />
          </div>
        </div>
        <Input type="text" placeholder="Buscar um produto" className="w-full" />
      </div>

      {/* max-width: 768px */}
      <div className="md:hidden flex items-center justify-between gap-2 px-3 py-5 bg-slate-900 relative">
        <Bars3Icon
          className="size-8 text-white cursor-pointer"
          onClick={handleClickMenu}
        />
        <Image
          src="/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="hidden sm:block rounded-md"
        />
        <Input
          type="text"
          placeholder="Buscar um produto"
          className="w-full max-w-[500px]"
        />
        <ShoppingBagIcon className="size-8 text-gray-300 cursor-pointer" />
      </div>

      <div
        className={`py-6 px-3 absolute z-10 top-0 w-full max-w-80 h-full flex flex-col transition-all duration-500 bg-slate-900 ${
          isMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <XMarkIcon
            className="size-8 text-white cursor-pointer"
            onClick={handleClickMenu}
          />
          <div className="flex gap-4">
            <UserCircleIcon className="size-8 text-white cursor-pointer" />
            <ShoppingBagIcon className="size-8 text-white cursor-pointer" />
          </div>
        </div>
        <Separator className="my-6 bg-slate-700" />
        <Menu />
      </div>
    </>
  )
}
