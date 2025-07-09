import React, { ReactNode } from "react";
import {MdArrowOutward} from "react-icons/md";

interface CardInterface {
    title: String
    description: String
    bgColor: String
    icon: ReactNode
}

const Card = ({ title, description, bgColor, icon }: CardInterface) => {
  return (
    <div className={`p-6 rounded-md border shadow-sm ${bgColor}`}>
      <div className="mb-4">
        <div className="text-2xl">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-justify text-gray-700 mb-4">{description}</p>
      <a
        href="#"
        className="inline-flex items-center text-sm font-medium text-black hover:underline"
      >
        Learn more
        <MdArrowOutward className="w-4 h-4 ml-1" />
      </a>
    </div>
  )
}

export default Card