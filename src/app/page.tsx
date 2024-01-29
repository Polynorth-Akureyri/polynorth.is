import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsOverview from './components/ProductsOverview'
import ProductionMethod from './components/ProductionMethod'
import Services from './components/Services'
import Quality from './components/Quality'
import About from './components/About'
import About2 from './components/About2'
import Footer from './components/Foooter'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="">
      <Hero
        title="Alltaf gott veður með Polynorth"
        subtitle="Einangrunarplast með reynslu"
      />
      <ProductsOverview />
      <ProductionMethod />
      <Services />
      <Quality />
      <About />
      <Quality />
      <About2 />
      <Contact />
    </main>
  )
}
