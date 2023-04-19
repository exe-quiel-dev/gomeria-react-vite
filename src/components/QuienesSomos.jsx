import localImg from '../imgs/local.jpg'


const QuienesSomos = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 p-5 md:p-10 items-center' id='quienes_somos'>
      <div className='p-5 hidden lg:block'>
        <img src={localImg} alt='foto de local' />
      </div>
      <div className='w-2/3 lg:w-1/2 justify-self-center'>
        <h3 className='text-start uppercase text-3xl mb-5 font-bold text-blue-700'>Quiénes somos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate tincidunt metus, in ultricies ante vehicula at. Proin accumsan scelerisque quam eu egestas. Maecenas bibendum sodales urna, id posuere nulla finibus in. Morbi semper suscipit nisl in malesuada.</p>
      </div>
    </section>
  )
}

export default QuienesSomos