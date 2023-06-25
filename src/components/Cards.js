import React from 'react';
import Single from '../images/person.jpg'


const Cards = () => {
  return (

    

    <div className=' bg-white' >
    <div className='max-w-[800px] mt-[-96px] w-full h-1/4 mx-auto text-center flex flex-col justify-center'>
      
      <div className='flex justify-center items-center text-[#252B42]'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
        Leading Medicine
        </p>
      
      </div>
      <p className='md:text-2xl text-xl  text-[#737373]'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
 

    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

            <div className=' flex space-x-4 bg-[#8EC2F2] rounded-lg p-10'>
            <img className=' mx-auto     bg-white' src={Single} alt="/" />
            <p className='py-2 text-white mx-8'>Emergency Case</p>

            </div >
              
              
              <div className='text-left font-medium text-[#737373]  '>
                  <p className='py-2  mx-8 mt-8'>- The best products start with Figma</p>
                  <p className='py-2  mx-8'>- Design with real data</p>
                  <p className='py-2  mx-8'>- Lightning fast prototyping</p>
                  <p className='py-2  mx-8'>- Fastest way to organize</p>
                  <p className='py-2  mx-8'>- Work at the speed of thought. </p>
                  <p className='py-2  mx-8 text-[#23A6F0]'>- Learn More. </p>

              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <div className=' flex space-x-4 bg-[#8EC2F2] rounded-lg p-10'>
            <img className=' mx-auto     bg-white' src={Single} alt="/" />
            <p className='py-2 text-white mx-8'>Emergency Case</p>

            </div >
              
              
              <div className='text-left font-medium text-[#737373]  '>
                  <p className='py-2  mx-8 mt-8'>- The best products start with Figma</p>
                  <p className='py-2  mx-8'>- Design with real data</p>
                  <p className='py-2  mx-8'>- Lightning fast prototyping</p>
                  <p className='py-2  mx-8'>- Fastest way to organize</p>
                  <p className='py-2  mx-8'>- Work at the speed of thought. </p>
                  <p className='py-2  mx-8 text-[#23A6F0]'>- Learn More. </p>

              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <div className=' flex space-x-4 bg-[#8EC2F2] rounded-lg p-10'>
            <img className=' mx-auto     bg-white' src={Single} alt="/" />
            <p className='py-2 text-white mx-8'>Emergency Case</p>

            </div >
              
              
              <div className='text-left font-medium text-[#737373]  '>
                  <p className='py-2  mx-8 mt-8'>- The best products start with Figma</p>
                  <p className='py-2  mx-8'>- Design with real data</p>
                  <p className='py-2  mx-8'>- Lightning fast prototyping</p>
                  <p className='py-2  mx-8'>- Fastest way to organize</p>
                  <p className='py-2  mx-8'>- Work at the speed of thought. </p>
                  <p className='py-2  mx-8 text-[#23A6F0]'>- Learn More. </p>

              </div>
          </div>
      </div>
    </div>

    </div>
  );
};



export default Cards;
