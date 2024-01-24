import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsOverview from './components/ProductsOverview'
import ProductionMethod from './components/ProductionMethod'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero
        title="Alltaf gott veður með Polynorth"
        subtitle="Einangrunarplast með reynslu"
      />
      <ProductsOverview />
      <ProductionMethod />
    </main>
  )
}
