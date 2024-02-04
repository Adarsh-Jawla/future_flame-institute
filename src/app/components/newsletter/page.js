
const Newsletter = () => {
    return (
      <>
      <div className="mt-10 h-40 mx-auto md:px-6 bg-sky-800">
      <div className="flex flex-wrap justify-center">
          <div className="grid items-center gap-x-6 lg:grid-cols-2  mt-10">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold dark:text-white">
                Do not miss any updates.
                <br />
                <span className="text-white">Subscribe to the newsletter</span>
              </h2>
            </div>
  
            <div className="mb-6 flex-row md:mb-0 md:flex">
              <div className=" mb-3 w-full md:mr-3 md:mb-0 xl:w-96">
                <input type="text" className="w-[80%] h-12 mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-gray-400 focus:outline-none rounded" placeholder="Enter your email" />
              </div>
              <button type="submit" className="bg-sky-600 h-12 hover:bg-sky-500 text-white px-4 py-2 rounded-lg "> Subscribe </button>
            </div>
          </div>
      </div>
  </div>
      </>
    )
  }
  
  export default Newsletter