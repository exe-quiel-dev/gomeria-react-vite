import { Link } from "react-scroll";
import { Outlet } from "react-router-dom"
import logo from '../imgs/logo.png'

const Layout = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <header className="bg-blue-950 flex flex-col md:flex-row justify-between items-center md:items-end px-10 py-2 text-white">
        {/* <h1 className="font-bold text-3xl uppercase underline underline-offset-4 hover:text-yellow-400 transition-colors cursor-pointer hidden md:block"></h1> */}
        <img src={logo} alt='imagen logo' className=' w-32 mb-5 md:mb-0' /> 
        <nav>
          <ul className="uppercase flex flex-col md:flex-row justify-center items-center">
            <li className="px-2 md:px-5 text-md md:text-lg hover:text-blue-950 transition-all hover:bg-white p-2 cursor-pointer hover:font-bold hover:rounded-xl"><Link to='quienes_somos' smooth={true} offset={200} duration={500}>Quienes somos</Link></li>
            <li className="px-2 md:px-5 text-md md:text-lg hover:text-blue-950 transition-all hover:bg-white p-2 cursor-pointer hover:font-bold hover:rounded-xl"><Link to='mision_vision' smooth={true} offset={200} duration={500}>Que hacemos</Link></li>
            <li className="px-2 md:px-5 text-md md:text-lg hover:text-blue-950 transition-all hover:bg-white p-2 cursor-pointer hover:font-bold hover:rounded-xl"><Link to='contacto' smooth={true} offset={200} duration={500}>Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <div className="bg-blue-950 text-white px-10 flex flex-col justify-center items-center py-5">
          <div>
            <h2 className="uppercase text-2xl font-bold underline underline-offset-4 text-center text-yellow-400">El Rubio</h2>
            <p className="my-3">Somos una gomería que cuenta con más de 40 años en el rubro, abierta desde 1957.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mx-5">
              <h3 className="font-bold my-2 text-center">Dirección:</h3>
              <p>Nombre de la Calle 9999</p>
              <span>Ciudad de Buenos Aires(1655)</span>
            </div>
            <div className="mx-5">
              <h3 className="font-bold my-2 text-center">Email:</h3>
              <p>direccionEmail@correo.com</p>
            </div>
            <div className="mx-5">
              <h3 className="font-bold my-2 text-center">Teléfono:</h3>
              <p>+54 9 11 3333-7777</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full text-center">
          <p>Mariano Rolet | Exe-Dev {date}©</p>
        </div>
      </footer>
    </>
  )
}

export default Layout