import React from "react";

const Home = () => {
  return (

   
      
  
          <div className="grid md:grid-cols-2 gap-8 justify-center ">
            <div className="max-w-[600px] p-4 mt-[100px] w-full h-fit  text-center flex flex-col justify-left ">
              <h1 className="md:text-7xl sm:text-5xl text-5xl text-left font-bold md:py-6">
                Meet the Best Hospital
              </h1>
              <p className="sm:mr-28 mt-4 md:mt-9">We know how large objects will act,</p>
                <p className="sm:mr-44 mt-1">but things on a small scale.</p>

              {/* <div className="flex justify-center items-center">
                <p className="md:text-xl sm:text-xl text-xl  py-4">
                  We know how large objects will act, but things on a small
                  scale.
                </p>
              </div> */}
              <div className="flex space-x-4">
                <button className="bg-[#23A6F0] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white">
                  Get Quote Now
                </button>
                {/* <button
                  class="hover:border-slate-400 border-white border w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white"
                  variant="outlined"
                >
                  Learn More
                </button> */}
              </div>
            </div>


         

            <div className="w-fit shadow-xl mt-[90px] ml-[90px] justify-center items-center  rounded-lg hover:scale-105 duration-300 mb-8 py-[2rem] px-[1rem] bg-white">
              <div className="text-left font-medium text-[#737373]  ">
                <h3 className=" font-bold text-[#252B42]  text-lg text-center">
                  Book Appointment
                </h3>

                <form>
                  <label>
                    Name*
                    <br></br>
                    <input
                      type="text"
                      class="border border-white rounded-lg py-2 px-4 text-gray-700"
                      name="inputName"
                      placeholder="Full Name"
                    ></input>
                    <br></br>
                  </label>
                  <label>
                    Email address *<br></br>
                    <input
                      type="email"
                      class="border  border-white rounded-lg py-2 px-4 text-gray-700"
                      name="inputEmail"
                      placeholder="exampl@email.com"
                    ></input>
                    <br></br>
                  </label>
                  <label>
                    Departement *
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
                  </label>
                  <label>
                    Time *
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
                  </label>
                </form>

                <button className=" bg-[#23A6F0] w-[250px] rounded-lg font-medium my-3 mx-auto py-1  justify-center   text-white  ">
                  Book Appointment
                </button>
              </div>
            </div>





            


          </div>


     
     
    
  );
};


export default Home;
