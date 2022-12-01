import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const trands = [
    {
        domain: "Technology",
        name: "Java",
        tweets :"16.2k"
    },
    {
        domain: "Business and finance",
        name: "#BTCUSD",
        tweets :"1,498"
    },
    {
        domain: "Politics",
        name: "NATO",
        tweets :"56.1K"
    },
    {
        domain: "",
        name: "Yale",
        tweets :"13.6k"
    },
    {
        domain: "Business and finance",
        name: "#opensea",
        tweets :"23.6k"
    },
    {
        domain: "",
        name: "ElomMuskAtroll",
        tweets :"3,736"
    },
    {
        domain: "Business and finance",
        name: "CBDC",
        tweets :"13.3K"
    },
    {
        domain: "Technology",
        name: "NodeJS",
        tweets :"2,421"
    },

    
]
function Dashbord() {
  return (
    <div className="hidden 2xl:flex flex-col  xl:col-span-2  ">
        {/* search */}
        <div className="h-16  flex items-center justify-center text-gray-500 ">
            <div className="bg-gray-800 flex items-center rounded-full   h-8">
            <BiSearch className="mx-2 "  />
            <input type="text" className="bg-transparent focus:outline-none " placeholder="Search Twitter" />
            </div>
        </div>
        {/* trends */}
        <div className="h-full bg-gray-800 text-white rounded-xl mt-6 p-5 w-56 mx-auto">
            <h2 className="text-xl">Trends for you</h2>
            {trands.map(({domain, name, tweets }, i)=>(
                <div key={i} className="flex justify-between items-start my-8">
                    <div>
                    <p className="text-sm">{domain}</p>
                    <h2>{name}</h2>
                    <p className="text-sm">{tweets}</p>
                    </div>
                    <BsThreeDots />
                </div>
            ))}

        </div>
    </div>
  )
}

export default Dashbord