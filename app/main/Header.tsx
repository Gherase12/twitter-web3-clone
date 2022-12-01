import React from 'react'
import  Image  from 'next/image';
import avatar from '../../public/avatar.png';
import { BsStars } from 'react-icons/bs';



function Header() {

  return (
    <div className=" z-20 flex items-center justify-between h-16 px-4 text-white bg-black lg:border-x-[1px] border-gray-500">
        <div className="flex items-center justify-between w-24 ">
            <Image 
            src={avatar}
            alt="Avatar picture"
            className="w-8 h-8 rounded-full "
            />
            <h2 className="font-bold">
               
            </h2>
        </div>
        <BsStars className="text-[25px] "/>
        
    </div>
  )
}

export default Header