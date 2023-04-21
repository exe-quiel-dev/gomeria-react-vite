import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import marcasImg from '../imgs/marcas.jpg'


const Marcas = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <div><img src={marcasImg} alt='logos de marcas' data-aos='fade' data-aos-offset={0}/></div>
  )
}

export default Marcas