import React from 'react'
import { GiFeather } from "react-icons/gi";
function TweetButton() {
  return (
    <div className="flex justify-center font-bold text-white bg-blue-500 rounded-full items-center w-[50px] h-[50px] lg:w-[200px]" >
        <GiFeather className="lg:hidden "/>
        <p className="hidden lg:flex">Tweet</p>
    </div>
  )
}

export default TweetButton