import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Form = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out'
    })
  }, [])

  return (
      <section className='py-14 lg:py-0' id='contacto'>
        <div className="flex flex-col items-center pt-10 text-center">
          <h4 className="uppercase font-bold text-2xl text-blue-700">Envíanos un mensaje</h4>
          <p className="p-3">¿Tiene una pregunta? Estamos aquí para ayudarle. Envíenos un mensaje y nos pondremos en contacto con usted</p>
        </div>
        <div className="p-5 md:p-10">
          <form className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <div className="m-4 w-full" data-aos='zoom-in' data-aos-offset={-200}>
                <label
                  className="font-bold uppercase"
                  htmlFor="nombre"
                >Nombre:</label>
                <input
                  className="p-3 rounded w-full shadow"
                  id='nombre'
                  type='text'
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="m-4 w-full" data-aos='zoom-in' data-aos-offset={-200}>
                <label
                  className="font-bold uppercase"
                  htmlFor="correo"
                >Correo:</label>
                <input
                  className="p-3 rounded w-full shadow"
                  id='correo'
                  type='email'
                  placeholder="Ingrese su correo"
                />
              </div>
              <div className="m-4 w-full" data-aos='zoom-in' data-aos-offset={-200}>
                <label
                  className="font-bold uppercase"
                  htmlFor="telefono"
                >Telefono:</label>
                <input
                  className="p-3 rounded w-full shadow"
                  id='telefono'
                  type='tel'
                  placeholder="Ingrese su telefono"
                />
              </div>
            </div>
            <div className="container mx-auto" data-aos='zoom-in' data-aos-offset={50}>
              <textarea
                name="mensaje"
                placeholder="Escriba su mensaje"
                maxLength={200}
                className="w-full md:m-0 p-3 rounded h-40 shadow"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Enviar"
              className="bg-blue-600 p-3 rounded w-full md:w-1/3 text-white hover:bg-blue-950 transition-all border hover:shadow cursor-pointer uppercase text-xl"
              data-aos='zoom-in' data-aos-offset={50}
            />
          </form>
        </div>
      </section>
  )
}

export default Form