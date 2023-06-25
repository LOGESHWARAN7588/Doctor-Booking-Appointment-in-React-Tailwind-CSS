import React from 'react';
import Starline from '../images/icn bx-star.jpg'
import Star from '../images/icn bxs-star.jpg'
import user1 from '../images/user.1.jpg'
import user2 from '../images/user.2.jpg'
import user3 from '../images/user.3.jpg'




const Review = () => {
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
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-5'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

            <div className=' ml-3 flex space-x-4  rounded-lg p-5'>
            <img className='  ' src={Star} alt="/" />
            <img className='  ' src={Star} alt="/" />
            <img className='  ' src={Star} alt="/" />
            <img className=' ' src={Star} alt="/" />
            <img className=' ' src={Starline} alt="/" />
           

            </div >
              
              
              <div className='text-left font-medium text-[#737373]  '>
                  <p className='py-2  mx-8 mt-8'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                 <img className='p-5 ml-3' src={user1} alt="/" />

              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <div className=' ml-3 flex space-x-4  rounded-lg p-5'>
            <img className='  ' src={Star} alt="/" />
            <img className='  ' src={Star} alt="/" />
            <img className='  ' src={Star} alt="/" />
            <img className=' ' src={Star} alt="/" />
            <img className=' ' src={Starline} alt="/" />
           

            </div >
              
              
              <div className='text-left font-medium text-[#737373]  '>
                  <p className='py-2  mx-8 mt-8'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                 <img className='p-5 ml-3' src={user2} alt="/" />

              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <div className=' ml-3 flex space-x-4  rounded-lg p-5'>
            <img className='  ' src={Star} alt="/" />
            <img className='  ' src={Star} alt="/" />
            <img className='  ' src={Star} alt="/" />
            <img className=' ' src={Star} alt="/" />
            <img className=' ' src={Starline} alt="/" />
           

            </div >
              
              
              <div className='text-left font-medium text-[#737373]  '>
                  <p className='py-2  mx-8 mt-8'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                 <img className='p-5 ml-3' src={user3} alt="/" />

              </div>
          </div>
      </div>
    </div>

    </div>
  );
};



export default Review;
