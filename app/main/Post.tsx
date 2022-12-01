import React from "react";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import casa from "../../public/casa.jpg";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";

const engagementStyle = "flex items-center space-x-2";

function Post() {
  return (
    <div className='p-4 text-white border-b-[1px] md:border-x-[1px] border-gray-500 '>
      <div className='flex space-x-4'>
        <Image
          src={avatar}
          alt='Avatar picture'
          className='flex-none w-12 h-12 rounded-full'
        />
        <div className='space-y-2'>
          <div className='relative flex h-6 space-x-2 '>
            <h2 className='truncate max-w-[30vw] '>Gherase Cosmin</h2>
            <h3 className='max-w-[60px] truncate text-gray-500 text-sm  '>
              @GheraseCosmin
            </h3>
            <h4>32m</h4>
            <BsThreeDots className='absolute text-gray-500 right-3' />
          </div>
          <p className='max-h-[400px]  pr-6'>
            
            Every like was built with purpose. Over time this makes your website
            more favorable with google and will eventually rank higher and
            outperform to your competition who are almost guaranteed to be using
            a page builder or cheap Wordpress theme that’s poorly built and not
            optimized for mobile experiences like mine are. Mine is a custom
            built site designed to convert traffic into customers by satisfying
            Google’s metrics and making the best perforating mobile site you can
            have. And for Every second of load time, you lose more and more
            customers who didn’t want to wait. When it loads instantly, we don’t
            lose those people. They can get to the site and convert into a sale
            instead of baili
          </p>
          {casa && (
          <img src="/casa.jpg" className="my-6 rounded-lg" alt="casa mea" />
          )}
          
          <div className='flex items-center justify-around h-8 text-gray-500 '>
            <div className={engagementStyle}>
              <FaRegComment />
              <p>20</p>
            </div>

            <div className={engagementStyle}>
              <AiOutlineRetweet />
              <p>200</p>
            </div>
            <div className={engagementStyle}>
              <AiOutlineHeart />
              <p>100</p>
            </div>
            <AiOutlineShareAlt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
