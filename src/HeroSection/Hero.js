import controller from '../images/controller.png'
export const Hero = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row items-center justify-center w-full">
      <div className='order-2'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Discover the world of <span className='text-yellow-200'>videogames</span>!</h2>
      </div>
      <div className='lg:order-2'>
        <img className='w-80 sm:w-80 md:w-96 lg:w-[500px]' src={controller} alt='logo' />
      </div>
    </div>
  )
}
