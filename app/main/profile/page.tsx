import React from "react";
import Post from './../Post';

function profilePage() {
  return (
    <div className='text-white'>
      {/* top */}
      <div className="border-x-[1px] border-gray-500">
        <div>
          <img
            src='/casa.jpg'
            alt='casa mea'
            className='max-h-[180px] w-full object-cover'
          />
        </div>
        <div className='h-[250px]  relative pt-[80px] pl-[20px] lg:pl-[50px]  '>
          <img
            src='/avatar.png'
            alt='avatar'
            className='w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] rounded-full absolute -top-[50px] left-[20px] border-2 border-black lg:-top-[100px]  '
          />
          <button className='rounded-full px-[10px]  border-2 absolute right-4 top-4  '>
            Edit profile
          </button>
          <div className="lg:scale-[1.1]">

          <h1>Gherase Cosmin</h1>
          <h1 className="text-gray-500 text-sm">@GheraseCosmin</h1>
          <div className="flex space-x-[20px]">
            <div>600 Following</div>
            <div>700 Followers</div>
          </div>
          </div>
        </div>
      </div>
      {/* tweets */}
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default profilePage;
