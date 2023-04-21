import { Parallax } from 'react-parallax'
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import bgImg from '../imgs/bg_cards.jpg'

const AtencionYServicio = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1500,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <>
      <section className=' bg_atencion_servicio grid grid-cols-1 items-center' id='atencion_servicio' data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
        <Parallax strength={-400} bgImage={bgImg}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 p-10 md:p-20 text-center"
            >
            <div className="p-5 bg-white w-4/5 h-auto md:h-60 md:w-2/3 flex flex-col justify-center items-center">
              <h3 className='uppercase text-2xl mb-2 lg:mb-5 font-bold text-blue-700'>Atención de calidad</h3>
              <p>Lograr diferenciación por medio de asesoramiento e inspirar confianza a nuestros clientes para fidelizar la relación y luego ser recomendados. Lo esperamos.</p>
            </div>
            <div className="p-5 bg-white w-4/5 h-auto md:h-60 md:w-2/3 flex flex-col justify-center items-center">
              <h3 className='uppercase text-2xl mb-2 lg:mb-5 font-bold text-blue-700'>Servicio al cliente</h3>
              <p>Nuestra gran experiencia y trayectoria como gomería nos avalan en el sector. Para nosotros lo más importante es su satisfacción, por eso, realizamos un trabajo eficiente y rápido. Tenemos tecnología avanzada para brindar un servicio de alta calidad. No dude en visitarnos.</p>
            </div>
          </div>
        </Parallax>
      </section>
    </>
  )
}

export default AtencionYServicio