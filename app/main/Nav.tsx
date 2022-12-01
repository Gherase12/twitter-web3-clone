import React from "react";
import { BsHash, BsBookmarkFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { RiHome7Fill, RiFileListLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import TweetButton from "./TweetButton";
import Link from "next/link";

function Nav() {
  const navItems = [
    { Icon: RiHome7Fill, name: "Home" },
    { Icon: BsHash, name: "Explore" },
    { Icon: IoMdNotificationsOutline, name: "Notifications" },
    { Icon: AiOutlineMail, name: "Messages" },
    { Icon: BsBookmarkFill, name: "Bookmarks" },
    { Icon: RiFileListLine, name: "Lists" },
    { Icon: BiUser, name: "Profile", href: "/main/profile" },
    { Icon: CiCircleMore, name: "More" },
  ];

  return (
    <div className='col-span-2   bg-black  text-white flex-col flex  text-[20px]  h-screen  items-center justify-around  '>
      <div className='flex items-center lg:items-start justify-around w-full flex-col h-[70%] py-6'>
        {navItems.map(({ Icon, name, href }, i) => (
          <Link key={i} href={href ?? "/main" } >
          
          <div className='flex items-center justify-start space-x-4 hover:bg-gray-800 cursor-pointer p-4 rounded-full '>
            <Icon />
            <div className='hidden lg:flex'>{name}</div>
          </div>
          </Link>
        ))}
        <TweetButton />
      </div>
      <div className='flex items-center space-x-5'>
        <img
          src='/avatar.png'
          className='rounded-full w-[50px] h-[50px]'
          alt='avatar'
        />
        <div className='text-sm  hidden lg:flex lg:flex-col '>
          <div>GheraseCosmin</div>
          <div className='text-gray-500'>@cosmingherase</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
