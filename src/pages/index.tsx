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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-full bg-slate-800">
        {/* ofertas para você */}
        <HomeSection
          title="Ofertas"
          icon={RocketLaunchIcon}
          buttonText="Ver todas as ofertas"
        />

        {/* destaques */}
        <div className="bg-slate-700">
          <HomeSection
            title="Destaques"
            icon={StarIcon}
            buttonText="Ver todos os destaques"
          />
        </div>

        {/* produtos recomendados */}
        <HomeSection
          title="Produtos Recomendados"
          icon={ListBulletIcon}
          buttonText="Ver Recomendações"
        />

        {/* mais vendidos */}
        <div className="bg-slate-700">
          <HomeSection
            title="Mais Vendidos"
            icon={CurrencyDollarIcon}
            buttonText="Ver mais produtos"
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
