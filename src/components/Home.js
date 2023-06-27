import React from 'react';


const Home = () => {
  return (
    <div className='bg-transparent' >

      <div className='mx-auto '>

      <div className='  flex space-x-4 '>


<div className='max-w-[800px] p-4 mt-[100px] w-full h-fit  text-center flex flex-col justify-left '>

  <h1 className='md:text-7xl sm:text-5xl text-5xl text-left font-bold md:py-6'>
  Meet the Best Hospital
  </h1>
  <div className='flex justify-center items-center'>
    <p className='md:text-xl sm:text-xl text-xl  py-4'>
    We know how large objects will act, but things on a small scale.
    </p>
  
  </div>
  <div className='flex space-x-4'>
<button className='bg-[#23A6F0] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white'>Get Quote Now</button>
<button className='  hover:border-slate-400 border-white w-[200px]  rounded-full font-medium my-6 mx-auto py-3 text-white variant="outlined"'>Learn More</button>

</div>
</div>




<div className='w-fit shadow-xl mt-[100px] flex flex-col p-10  rounded-lg hover:scale-105 duration-300  py-[1rem] px-1 bg-white'>

          
                  
         

         

         

<div className='text-left font-medium text-[#737373]  '>
          <h3 className='py-2 font-bold text-[#252B42] mx-8 text-lg text-center'>Book Appointment</h3>
{/* 
              <p className='py-2  mx-8 mt-8'>Name*</p>
              
              <textarea class="caret-pink-500 ... p-2  py-1  mx-8 text-hi  rounded-lg hint-Full Name * "> </textarea>
              
              <p className='py-2  mx-8'>Email address *</p>
              <textarea class="caret-pink-500 ..."></textarea>
              <p className='py-2  mx-8'>Departement *</p>
              <textarea class="caret-pink-500 ..."></textarea>
              <p className='py-2  mx-8'>Time *</p>
              <textarea class="caret-pink-500 ..."></textarea> */}

              <form>
                <label>
                Name*
                <br></br>
                  <input type="text" name="name"/>
                  <br></br>
                </label>
                <label>
                Email address *
                <br></br>
                  <input type="text" name="name"/>
                  <br></br>
                </label>
                <label>
                Departement *
                <br></br>
                  <input type="text" name="name"/>
                  <br></br>
                </label>
                <label>
                Time *
                <br></br>
                  <input type="text" name="name"/>
                  <br></br>
                </label>
                
              </form>
              
              <button className=' bg-[#23A6F0] w-[250px] rounded-lg font-medium my-7 justify-center mx-auto py-3 text-white  '>Book Appointment</button>


              

             

          </div>
</div>



</div>




        </div>

      
          

      </div>
    
      

 
      
    
  );
};


{/* <div className='max-w-[940px] ml-[100px] mt-[150px] mr-[700px]  h-screen mx-auto p-4 flex flex-col '>
      
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
      Meet the Best Hospital
      </h1>
    
      <h4 className='md:text-2xl sm:text-6xl text-xl font-medium text-white'>We know how large objects will act, 
but things on a small scale.</h4>
      <div className='flex space-x-4'>
      <button className='bg-[#23A6F0] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white'>Get Quote Now</button>
      <button className='  hover:border-slate-400 border-white w-[200px]  rounded-full font-medium my-6 mx-auto py-3 text-white'>Learn More</button>

      </div>
      
    </div> */}
export default Home;
