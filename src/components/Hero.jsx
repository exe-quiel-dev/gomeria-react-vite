import { Parallax } from 'react-parallax'
import heroImg from '../imgs/hero.webp'

const Hero = () => {
  return (
    <>
      <Parallax strength={200} bgImage={heroImg}>
        <div className="hero flex items-center justify-start p-5">
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='container mx-auto bg-black/[0.1] p-5 rounded'>
              <h2 className='uppercase text-white drop-shadow font-bold text-5xl py-5'>servicio de auxilio <span className='text-yellow-400 block'>las 24 horas</span></h2>
              <button className='uppercase text-xl bg-white text-black p-3 hover:bg-yellow-400 transition-all mt-10 border hover:shadow hover:rounded-xl'>Contactenos</button>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default Hero