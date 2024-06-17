import { forwardRef } from 'react'
import Link from 'next/link'
import {
  HomeIcon,
  BellIcon,
  ShoppingCartIcon,
  HeartIcon,
  HandThumbUpIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
  XMarkIcon,
  UserCircleIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { Separator } from './ui/separator'

const className = 'size-7'

const MENU_ITEMS = [
  {
    text: 'Home',
    icon: <HomeIcon className={className} />,
    url: '/product/keyboard-gamer-led-full',
  },
  {
    text: 'Notificações',
    icon: <BellIcon className={className} />,
    url: '/product/keyboard-gamer-led-full',
  },
  {
    text: 'Meus Pedidos',
    icon: <ShoppingCartIcon className={className} />,
    url: '/product/keyboard-gamer-led-full',
  },
  {
    text: 'Minha Conta',
    icon: <UserIcon className={className} />,
    url: '/product/keyboard-gamer-led-full',
  },
  {
    text: 'Favoritos',
    icon: <HeartIcon className={className} />,
    url: '/product/keyboard-gamer-led-full',
  },
  {
    text: 'Avaliações',
    icon: <HandThumbUpIcon className={className} />,
    url: '/product/keyboard-gamer-led-full',
  },
  {
    text: 'Ajuda',
    icon: <QuestionMarkCircleIcon className={className} />,
    url: '/product/keyboard-gamer-led-full',
  },
]

interface IMenuProps {
  isVisible: boolean
  handleClick: () => void
}

export const Menu = forwardRef<HTMLDivElement, IMenuProps>(
  ({ handleClick, isVisible }: IMenuProps, ref) => {
    return (
      <div
        ref={ref}
        className={`py-6 px-3 absolute z-30 top-0 w-full max-w-80 h-full flex flex-col transition-all duration-500 bg-slate-900 ${
          isVisible ? 'left-0' : '-left-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <XMarkIcon
            className="size-8 text-white cursor-pointer"
            onClick={handleClick}
          />
          <div className="flex gap-4">
            <UserCircleIcon className="size-8 text-white cursor-pointer" />
            <ShoppingBagIcon className="size-8 text-white cursor-pointer" />
          </div>
        </div>
        <Separator className="my-6 bg-slate-700" />

        <ul className="flex flex-col h-full">
          {MENU_ITEMS.map((menuItem) => (
            <li
              key={menuItem.text}
              className="flex gap-4 text-white text-xl hover:bg-slate-600 cursor-pointer p-4 rounded-md"
            >
              {menuItem.icon}
              <Link href={menuItem.url}>{menuItem.text}</Link>
            </li>
          ))}
          <li className="mt-auto flex gap-4 text-red-300 text-xl hover:bg-slate-600 cursor-pointer p-4 rounded-md">
            <ArrowRightStartOnRectangleIcon className={className} />
            <a href="/product/keyboard-gamer-led-full">Logout</a>
          </li>
        </ul>
      </div>
    )
  },
)
