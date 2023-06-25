import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu , AiOutlineArrowRight } from 'react-icons/ai';



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1250px] mx-auto px-4 text-white bg-transparent">
      {/* <h1 className="w-full ml-[150px] mr-[250px] text-3xl font-bold text-[#FFF] ">Physionic</h1> */}
      <h1 className='w-full text-3xl font-bold ml-[90px] text-[#252B42] m-4'>Physionic</h1>
      <ul className='hidden md:flex '>
        <li className=' p-8'>Home</li>
        <li className=' p-8'>Product</li>
        <li className=' p-8'>Pricing</li>
        <li className=' p-8'>Contact</li>
        
        <button className='gap-34 bg-[#23A6F0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Quote Now</button>

      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#F6F6F6] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#252B42] m-4'>Physionic</h1>
          <li className='p-7 border-b text-[#737373] '>Home</li>
          <li className='p-7 border-b text-[#737373]'>Product</li>
          <li className='p-7 border-b text-[#737373]'>Pricing</li>
          <li className='p-7 text-[#737373]'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
