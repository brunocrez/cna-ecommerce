import { useRouter } from 'next/router'
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
import { Routes } from '@/utils/routes'

const className = 'size-7'

const MENU_ITEMS = [
  {
    text: 'Home',
    icon: <HomeIcon className={className} />,
    url: Routes.HOME,
  },
  {
    text: 'Notificações',
    icon: <BellIcon className={className} />,
    url: '/',
  },
  {
    text: 'Meus Pedidos',
    icon: <ShoppingCartIcon className={className} />,
    url: '/',
  },
  {
    text: 'Minha Conta',
    icon: <UserIcon className={className} />,
    url: '/',
  },
  {
    text: 'Favoritos',
    icon: <HeartIcon className={className} />,
    url: '/',
  },
  {
    text: 'Avaliações',
    icon: <HandThumbUpIcon className={className} />,
    url: '/',
  },
  {
    text: 'Ajuda',
    icon: <QuestionMarkCircleIcon className={className} />,
    url: '/',
  },
]

interface IMenuProps {
  isVisible: boolean
  handleClick: () => void
}

export const Menu = forwardRef<HTMLDivElement, IMenuProps>(
  ({ handleClick, isVisible }: IMenuProps, ref) => {
    const { push } = useRouter()
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
            <ShoppingBagIcon
              className="size-8 text-white cursor-pointer"
              onClick={() => push(Routes.CART)}
            />
          </div>
        </div>
        <Separator className="my-6 bg-slate-700" />

        <ul className="flex flex-col h-full">
          {MENU_ITEMS.map((menuItem) => (
            <li
              key={menuItem.text}
              className="flex gap-4 text-white text-xl hover:bg-slate-600 cursor-pointer p-4 rounded-md"
              onClick={() => push(menuItem.url)}
            >
              {menuItem.icon}
              <Link href={menuItem.url}>{menuItem.text}</Link>
            </li>
          ))}
          <li className="mt-auto flex gap-4 text-red-300 text-xl hover:bg-slate-600 cursor-pointer p-4 rounded-md">
            <ArrowRightStartOnRectangleIcon className={className} />
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </div>
    )
  },
)
