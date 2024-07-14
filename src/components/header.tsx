import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Input } from './ui/input'
import {
  Bars3Icon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { Menu } from './menu'
import { Container } from './container'
import { Overlay } from './overlay'
import { Routes } from '@/utils/routes'
import { useCart } from '@/contexts/CartContext'

export function Header() {
  const { push } = useRouter()
  const { cartItems } = useCart()
  const [isVisible, setIsVisible] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickMenu = () => {
    setIsVisible((prevState) => !prevState)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.body.style.overflow = 'auto'
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isVisible])

  useEffect(() => {
    if (cartItems) {
      setQuantity(cartItems.totalItems)
    }
  }, [cartItems])

  return (
    <>
      {/* screens over 1024px */}
      <div className="hidden lg:flex bg-slate-900 px-3 py-6">
        <Container>
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-6 flex-1">
              <Bars3Icon
                className="size-8 text-white cursor-pointer self-center"
                onClick={handleClickMenu}
              />
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => push(Routes.HOME)}
              >
                <img
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
                className="w-full max-w-[692px]"
              />
            </div>
            <div className="flex items-center gap-7 text-gray-300">
              <UserIcon className="size-8 cursor-pointer" />
              <ShoppingCartIcon className="size-8 cursor-pointer" />
              <HeartIcon className="size-8 cursor-pointer" />
              <div className="relative" onClick={() => push(Routes.CART)}>
                <ShoppingBagIcon className="size-8 cursor-pointer" />
                {quantity > 0 && (
                  <div className="absolute -right-1 -bottom-2 bg-indigo-800 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                    <span className="text-xs text-white">{quantity}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* max-width: 1024px */}
      <div className="hidden lg:hidden md:flex flex-col gap-4 bg-slate-900 px-3 py-5">
        <div className="flex justify-between items-center">
          <Bars3Icon
            className="size-8 text-white cursor-pointer"
            onClick={handleClickMenu}
          />
          <div className="flex items-center gap-3">
            <img
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
            <div className="relative">
              <ShoppingBagIcon
                className="size-8 cursor-pointer"
                onClick={() => push(Routes.CART)}
              />
              {quantity > 0 && (
                <div className="absolute -right-1 -bottom-2 bg-indigo-800 rounded-full w-5 h-5 flex items-center justify-center">
                  <span className="text-xs text-white">{quantity}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <Input type="text" placeholder="Buscar um produto" className="w-full" />
      </div>

      {/* max-width: 768px */}
      <div className="md:hidden flex items-center justify-between gap-2 px-3 py-5 bg-slate-900">
        <Bars3Icon
          className="size-8 text-white cursor-pointer"
          onClick={handleClickMenu}
        />
        <img
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
        <div className="relative">
          <ShoppingBagIcon
            className="size-8 text-gray-300 cursor-pointer"
            onClick={() => push(Routes.CART)}
          />
          {quantity > 0 && (
            <div className="absolute -right-1 -bottom-2 bg-indigo-800 rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-xs text-white">{quantity}</span>
            </div>
          )}
        </div>
      </div>

      <Menu isVisible={isVisible} ref={menuRef} handleClick={handleClickMenu} />

      {/* overlay */}
      <Overlay isVisible={isVisible} />
    </>
  )
}
