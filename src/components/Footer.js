import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (

    <div className='w-full py-5 px-4 bg-white'>
       <div className=' mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <h6 className='font-bold text-[#252B42]'>Get In Touch</h6>
        <p className='py-4 text-[#737373]'>the quick fox jumps over the 
lazy dog</p>
        <div className='flex justify-between md:w-[50%] my-6'>
            <FaFacebookSquare size={30} color='#23A6F0'/>
            <FaInstagram size={30} color='#23A6F0'/>
            <FaTwitterSquare size={30} color='#23A6F0'/>
            <FaGithubSquare size={30} color='#23A6F0'/>
            <FaDribbbleSquare size={30} color='#23A6F0'/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between '>
    <div>
        <h6 className='font-bold text-[#252B42]'>Company info</h6>
        <ul>
            <li className='py-2 text-sm text-[#737373]'>About Us</li>
            <li className='py-2 text-sm text-[#737373]'>Carrier</li>
            <li className='py-2 text-sm text-[#737373]'>We are hiring</li>
            <li className='py-2 text-sm text-[#737373]'>Blog</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold   text-[#252B42]'>Features</h6>
        <ul>
            <li className='py-2 text-sm text-[#737373]'>Business Marketing</li>
            <li className='py-2 text-sm text-[#737373]'>User Analytic</li>
            <li className='py-2 text-sm text-[#737373]'>Live Chat</li>
            <li className='py-2 text-sm text-[#737373]'>Unlimited Support</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-[#252B42]'>Resources</h6>
        <ul>
            <li className='py-2 text-sm text-[#737373]'>IOS & Android</li>
            <li className='py-2 text-sm text-[#737373]'>Watch a Demo</li>
            <li className='py-2 text-sm text-[#737373]'>Customers</li>
            <li className='py-2 text-sm text-[#737373]'>API</li>
            
        </ul>
    </div>

   


 
      </div>
      
    </div>
    <h6 className='max-w-[800px] mt-[10px] w-full  mx-auto text-center flex flex-col  text-[#737373]'>Made With Love By Figmaland All Right Reserved </h6>

    </div>
    
   
  );
};

export default Footer;
