"use client"

import { FaLaptopCode, FaSpaceAwesome } from "react-icons/fa6";
import { MdPeopleOutline } from "react-icons/md"

const goals = [
  {
    id: 1,
    icon: <MdPeopleOutline size={48} />,
    title: "Innovate Together",
  },
  {
    id: 2,
    icon : <FaSpaceAwesome size={48}/>,
    title: "Tech Empowerment",
  },
  {
    id: 3,
    icon : <FaLaptopCode  size={48}/>,
    title: "All-Inclusive Tech",
  },
];

const Goals = () => {
  
  return (
    <div className="md:my-24 md:px-28">
      <h1 className="scroll-m-20 font-extrabold tracking-tight text-2xl lg:text-4xl py-8 flex flex-row justify-center whitespace-nowrap">
        Our Goals
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
        {goals.map((goal) => (
          <div key={goal.id} className="w-56 md:w-64 h-28 flex-none dark:bg-[rgba(0,0,0,0.05)] outline outline-1 rounded-md">
            {goal.icon && (
              <div className="flex flex-row justify-center pt-4">
                {goal.icon}
              </div>
            )}
            <div className="flex flex-row pt-2 justify-center scroll-m-20 text-xl font-bold tracking-tight">
              {goal.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Goals
