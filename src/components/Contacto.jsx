import { useEffect } from 'react'
import contactImg from '../imgs/pila_cubiertas.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contacto = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-14 lg:py-0'>
      <div className='w-4/5 lg:w-3/4 justify-self-center hidden md:block' data-aos='fade-left' data-aos-offset={50}>
        <img src={contactImg} alt='imagen de cubiertas de auto' className='w-full' />
      </div>
      <div className='w-1/2 justify-self-center' data-aos='zoom-in' data-aos-offset={50}>
        <h3 className='uppercase text-2xl mb-5 font-bold text-blue-700'>¿Necesita recambio de llantas en Ciudad de Buenos Aires?</h3>
        <p>No dude en contactarnos, en Gomeria El Rubio brindamos un excelente servicio.</p>
        <p className='pt-5'>Llámenos ahora mismo o visite nuestras instalaciones, estaremos encantados de atenderlo.</p>
      </div>
    </div>
  )
}

export default Contacto