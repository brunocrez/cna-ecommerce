import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import {
  RocketLaunchIcon,
  StarIcon,
  ListBulletIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'
import { Footer } from '@/components/footer'
import { HomeSection } from '@/components/home-section'
import { ProductGroups } from '@/utils/productGroups'
import { useCartItems } from '@/hooks/useCartItems'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user } = useAuth()
  const { setCartItems } = useCart()
  const { data } = useCartItems(user.userId, !!user?.name)

  useEffect(() => {
    if (data) {
      setCartItems(data)
    }
  }, [data])

  return (
    <main>
      <Header />
      <div className="h-full bg-slate-800">
        {/* ofertas para você */}
        <HomeSection
          title="Ofertas"
          icon={RocketLaunchIcon}
          buttonText="Ver todas as ofertas"
          groupId={ProductGroups.BEST_OFFERS}
        />

        {/* destaques */}
        <div className="bg-slate-700">
          <HomeSection
            title="Destaques"
            icon={StarIcon}
            buttonText="Ver todos os destaques"
            groupId={ProductGroups.HIGHLIGHTS}
          />
        </div>

        {/* produtos recomendados */}
        <HomeSection
          title="Produtos Recomendados"
          icon={ListBulletIcon}
          buttonText="Ver Recomendações"
          groupId={ProductGroups.RECOMMENDED}
        />

        {/* mais vendidos */}
        <div className="bg-slate-700">
          <HomeSection
            title="Mais Vendidos"
            icon={CurrencyDollarIcon}
            buttonText="Ver mais produtos"
            groupId={ProductGroups.BEST_SELLERS}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
