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
} from '@heroicons/react/24/outline'

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

export function Menu() {
  return (
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
  )
}
