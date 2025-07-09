import React, { ReactNode } from 'react';
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdDirectionsRun } from "react-icons/md";

interface StepCardInterface {
    icon: ReactNode
    title: String
    description: String
    bgColor?: String,
    step?: String

}

export const StepCard = ({ icon, step, title, description, bgColor }: StepCardInterface ) => (
  <div className="p-6 bg-white">
    <div
      className={`w-full flex items-center justify-between rounded-full mb-4`}
    >
      <span className="inline-block text-4xl">
        {icon}
      </span>
      
        <span
        className={`text-lg inline-block px-3 py-1 mb-4 rounded-full ${bgColor}`}
      >
        {step}
      </span>
    </div>
    
    <h3 className='mb-4 mt-16 text-xl font-medium'>{title}</h3>
    <p className="text-gray-600 mb-8">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: <IoBookOutline/>,
      step: 'Step 01',
      title: 'Inspiring Reading',
      description:
        'Encourage individuals to explore diverse ideas and perspectives through engaging content.',
      bgColor: 'bg-purple-100',
    },
    {
      icon: <MdOutlineAttachMoney/>,
      step: 'Step 02',
      title: 'Strategic Fundraising',
      description:
        'Implement impactful strategies to generate and manage resources effectively.',
      bgColor: 'bg-gray-100',
    },
    {
      icon: <MdDirectionsRun/>, 
      step: 'Step 03',
      title: 'Holistic Development',
      description:
        'Foster growth across physical, mental, and emotional dimensions for lasting impact.',
      bgColor: 'bg-blue-100',
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-4xl md:text-5xl text-center mb-10 font-bold">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            icon={step.icon}
            step={step.step}
            title={step.title}
            description={step.description}
            bgColor={step.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
