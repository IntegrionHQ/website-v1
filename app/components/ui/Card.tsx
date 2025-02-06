import React from 'react'
import { IconBaseProps } from 'react-icons';



const Card = ({featureName, Icon, desc}:{featureName:string, Icon:React.ComponentType<IconBaseProps>, desc:string}) => {
  return (
    <div className='bg-[#efefef] p-5  rounded-lg  gap-36 flex flex-col justify-between items-center hover:bg-white hover:drop-shadow-xl'>
      <div className='flex justify-between items-center w-full'>
       <span className='text-black text-xl font-semibold'>
       {featureName}
        </span> 
        <Icon size={30}/>
        </div>

<div className='flex flex-col justify-end'>
<p className='text-[#636363] subtext text-md w-4/5'>{desc}</p>
    </div>
        
    </div>
  )
}

export default Card
