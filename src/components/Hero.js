import React from 'react';


const Hero = () => {
  return (
    <div className='bg-transparent' >
      <div className='max-w-[940px] ml-[100px] mt-[150px] mr-[700px]  h-screen mx-auto p-4 flex flex-col '>
      
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
        Meet the Best Hospital
        </h1>
      
        <h4 className='md:text-2xl sm:text-6xl text-xl font-medium text-white'>We know how large objects will act, 
but things on a small scale.</h4>
        <div className='flex space-x-4'>
        <button className='bg-[#23A6F0] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white'>Get Quote Now</button>
        <button className='  hover:border-slate-400 border-white w-[200px]  rounded-full font-medium my-6 mx-auto py-3 text-white'>Learn More</button>

        </div>
        
      </div>
    </div>
  );
};

export default Hero;
