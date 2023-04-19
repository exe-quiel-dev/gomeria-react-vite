import AtencionYServicio from '../components/AtencionYServicio'
import Contacto from '../components/Contacto'
import MisionVision from '../components/MisionVision'
import Hero from '../components/Hero'
import QuienesSomos from '../components/QuienesSomos'
import Marcas from '../components/Marcas'


const Home = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <QuienesSomos />
      <MisionVision />
      <AtencionYServicio />
      <Marcas />
      <section className='bg-gray-200 p-10' id='mision_vision'>
        <Contacto />
      </section>
    </main>
  )
}

export default Home