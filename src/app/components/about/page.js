import { GoDotFill } from 'react-icons/go'
import { BsDashLg } from 'react-icons/bs'

const About = () => {
  return (
    <>
      <div className="flex flex-wrap  bg-gray-100 ">
          <div className="my-12 ml-10 bg-cover bg-center bg-sky-800 rounded-xl w-full lg:w-4/12 p-8">
                <div className="h-full  text-white"> <span>
                  <h1 className="text-3xl font-semibold text-center mb-4">Contact Us</h1>
                  <p className="text-xs font-normal mt-2 text-center">Contact us by filling this contact form. </p>
                </span>
                  <div className="mt-6 leading-7 text-center">
                    <input type="text" name="" placeholder="Full Name" id=""
                      className=" w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-gray-400 focus:outline-none rounded" />

                    <input type="email" name="" placeholder="Email Address" id=""
                      className=" w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-gray-400 focus:outline-none rounded" />

                    <input type="tel" name="phone" placeholder="Phone Number" id="phone"
                      className=" w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-gray-400 focus:outline-none rounded" />

                    <textarea id="message" name="message" placeholder="Write us a message"
                      className="w-[80%] bg-gray-400  border-white h-20 text-sm outline-none placeholder:text-white placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"></textarea>
                    <button
                      className="block m-auto w-[60%] md:w-[50%] text-center border bg-yellow-500 rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-yellow-400">Send</button>
                  </div>
                </div>
          </div>

          <div className="w-full lg:w-7/12 p-8 mt-8 mr-12">
            <div className="">
              <div className="flex flex-row p-3">
                <GoDotFill size={20} className="text-sky-800" />
                <GoDotFill size={20} className="text-sky-800" />
                <span className='text-slate-500 px-6 text-base tracking-widest'>SORT ABOUT US</span>
                <GoDotFill size={20} className="text-sky-800" />
                <GoDotFill size={20} className="text-sky-800" />
              </div>

              <h2 className="text-4xl">We are <span className="font-bold">Genius Course</span> work since 1980.</h2>
              <p className="text-gray-700 text-base">We take our mission of increasing global access to quality education seriously. We connect learners to the best universities and institutions from around the world.</p>
            </div>
            <BsDashLg size={40} className=" text-sky-800" />
            <div>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam. magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>

              <div className="text-sm text-black font-semibold flex flex-col mt-10">
                <div className="my-1 flex"> <GoDotFill size={20} className="text-sky-800" /> Professional And Experienced Since 1980</div>
                <div className="my-1 flex"> <GoDotFill size={20} className="text-sky-800" /> We Connect Learners To The Best Universities From Around The World</div>
                <div className="my-1 flex"> <GoDotFill size={20} className="text-sky-800" /> Our Mission Increasing Global Access To Quality Education</div>
                <div className="my-1 flex"> <GoDotFill size={20} className="text-sky-800" /> 100K Online Available Courses</div>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <div className="mr-4">
                <button className="bg-sky-800 hover:bg-sky-500 text-white px-4 py-2 rounded-lg">About us</button>
              </div>
              <div>
                <button className="bg-sky-800 hover:bg-sky-500 text-white px-4 py-2 rounded-lg">Contact us</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About