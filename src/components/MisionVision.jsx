import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import tyresImg from '../imgs/tyre_storage.jpg'


const MisionVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-2 items-center bg-gray-200 py-14 lg:py-0' id='mision_vision'>
        <div className='flex flex-col items-center'>
          <div className='my-5 w-2/3 lg:w-1/2 justify-self-center p-5 md:p-0' data-aos='slide-right' data-aos-offset={-200}>
            <h3 className='text-start uppercase text-2xl mb-5 font-bold text-blue-700'>Misión</h3>
            <p>Comercializar neumáticos, productos y servicio de mecánica ligera y lubricentro, en un marco de excelencia que responda a las necesidades de nuestros clientes.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='my-5 w-2/3 lg:w-1/2 justify-self-center p-5 md:p-0' data-aos='slide-left' data-aos-offset={-200}>
            <h3 className='text-start uppercase text-2xl mb-5 font-bold text-blue-700'>Visión</h3>
            <p>Ser líderes en la comercialización de neumáticos y afines, alcanzando una posición de referencia en la prestación de servicios integrales e innovadores. Extender alianzas estratégicas para seguí brindando soluciones efectivas a las necesidades de los clientes, en una marco de continuo crecimiento y desarrollo del a empresa y de quienes la conforman.</p>
          </div>
        </div>
        {/* <div className='hidden lg:block'>
          <img src={tyresImg} alt='imagen deposito de cubiertas' className='w-full' />
        </div> */}
      </section>
    </>
  )
}

export default MisionVision