import Image from 'next/image'
import { BiSolidRightArrow } from 'react-icons/bi'
import { GoDotFill } from 'react-icons/go'

const Banner = () => {
  return (
    <>
      <section className="bg-sky-800 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-8">
            <div className='flex flex-row p-3'>
              <GoDotFill size={20} className="text-sky-400 mt-2" />
              <GoDotFill size={20} className="text-sky-400 mt-2" />
              <span className='text-slate-400 px-4  text-2xl'>Education & Training Organization</span>
              <GoDotFill size={20} className="text-sky-400 mt-2" />
              <GoDotFill size={20} className="text-sky-400 mt-2" />
            </div>
            <h1 className="mb-8 text-5xl leading-relaxed font-bold text-white">Inventive Solution for Education</h1>
            <div className='hover:shadow-2xl'>
              <button className=" text-white py-3 px-4 hover:text-yellow-300 border-solid border-2 rounded-sm border-green-600 text-lg flex flex-row font font-semibold">OUR COURSES <BiSolidRightArrow className='mt-2 ml-2 text-xs text-blue-500' /> </button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src="/images/img1.png" className="object-cover object-center rounded" alt="hero" height={200} width={400} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner