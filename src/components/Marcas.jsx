import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import marcasImg from '../imgs/marcas.jpg'


const Marcas = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated',
    })
  }, [])

  return (
    <div><img src={marcasImg} alt='logos de marcas' data-aos='fade' data-aos-offset={-200} /></div>
  )
}

export default Marcas