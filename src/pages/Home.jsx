import AtencionYServicio from '../components/AtencionYServicio'
import Contacto from '../components/Contacto'
import MisionVision from '../components/MisionVision'
import Hero from '../components/Hero'
import QuienesSomos from '../components/QuienesSomos'
import Marcas from '../components/Marcas'
import Form from '../components/Form'


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
      <section className='bg-gray-200 p-2' id='mision_vision'>
        <Contacto />
      </section>
        <Form />
    </main>
  )
}

export default Home