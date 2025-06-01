import React from 'react'
import { IconBaseProps } from 'react-icons';
import BackgroundGradient from "@/components/ui/AIFeatureCard"


const Card = ({featureName, Icon, desc}:{featureName:string, Icon:React.ComponentType<IconBaseProps>, desc:string}) => {
  return (
        <div className='bg-gray-50 p-5 transition-all rounded-lg  gap-36 flex flex-col justify-between items-start drop-shadow-xl scale-[1] hover:scale-[1.1]'>
        <Icon size={30}/>
<div className='flex flex-col justify-end'>
<span className='text-black text-xl font-semibold'>
       {featureName}
        </span> 
<p className='text-zinc-600 subtext text-md w-4/5'>{desc}</p>
    </div>
        
    </div>
  )
}

export default Card