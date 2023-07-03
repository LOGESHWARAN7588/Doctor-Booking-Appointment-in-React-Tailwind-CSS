import React from "react";

const Home = () => {
  return (

    <div className="div flex mt-28 md:mt-32 flex-wrap">
            <div className="w-full md:w-1/2  md:mt-32  text-center">
                <h1 className="text-2xl md:text-5xl font-bold sm:mr-10 ">Meet the best</h1>
                <h1 className="mt-1 sm:mt-3 text-2xl md:text-5xl font-bold sm:mr-44 ">Hospital</h1>
                <p className="sm:mr-28 mt-4 md:mt-9">We know how large objects will act,</p>
                <p className="sm:mr-44 mt-1">but things on a small scale.</p>

                <div className="flex space-x-4">
     <button className="bg-[#23A6F0] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white">
        Get Quote Now
      </button>
       <button
              class="hover:border-slate-400 border-white border w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white"
              variant="outlined"
            >
              Learn More
            </button> 
    </div>

            </div> 

            <div className="mx-auto w-full md:w-1/4 mt-5 hover:scale-105 duration-300">
                <form class="bg-white shadow-md rounded-s-md px-8 pt-6 pb-8 mb-4 mx-5">
                    <div class="mb-4">
                        <h1 className="text-1xl font-bold text-center"> Book Appointments</h1>
                        <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="username">
                            Name*
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Fullname" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="Emailaddress">
                            Emailaddress*
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="example@gmail.com" />
                    </div>

                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="Departments">
                            Departments*
                        </label>
                         
                        <div class="flex">
            <div class="relative inline-flex">
              <select class="border border-l-0 rounded-lg ml-[20px] bg-gray-100 text-gray-600 px-12 py-2 appearance-none">
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="absolute right-0 top-0 mt-2 mr-2 h-4 w-4 text-gray-600 pointer-events-none"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.95 6.95a.5.5 0 01.7.7l-3.823 3.822a.5.5 0 01-.637.057l-.088-.057-3.822-3.823a.5.5 0 01.638-.765l.088.057L8 9.586l3.537-3.536a.5.5 0 01.708 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
                       
                   </div>
                   
                   <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="Departments">
                            Time*
                        </label>
                         
                     <div class="flex">
            <div class="relative inline-flex">
              <select class="border border-l-0 rounded-lg bg-gray-100 ml-[20px] text-gray-600 px-12 py-2 appearance-none">
                <option>4 : 00 Available</option>
                <option>8 : 00 Available</option>
                <option>11: 00 Available</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="absolute right-0 top-0 mt-2 mr-2 h-4 w-4 text-gray-600 pointer-events-none"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.95 6.95a.5.5 0 01.7.7l-3.823 3.822a.5.5 0 01-.637.057l-.088-.057-3.822-3.823a.5.5 0 01.638-.765l.088.057L8 9.586l3.537-3.536a.5.5 0 01.708 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
                       
                   </div>

                    
                    
                    <div class="flex items-center ">
                        <button
                            class="w-full bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-3"
                            type="button">
                            Book Appointment
                        </button>

                    </div>
                </form>
            </div>

        </div>


    
  );
};

export default Home;
