import React from 'react'
import { CircleCheckBig } from 'lucide-react';
const AIFeatureCard = ({text}: {text:string}) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-2 bg-[#12031F] p-3 rounded-lg'>
      <CircleCheckBig className='text-green-500'/>
        <p className='text-gray-400 font-normal'>{text}</p>
    </div>
  )
}

export default AIFeatureCard
