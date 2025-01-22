import React from 'react'
import { CircleAlert } from 'lucide-react'

const Tag = ({bgColor,color, tagName, Icon}:{
    bgColor:string,
    color:string,
    tagName:string,
    Icon: React.ComponentType<any>
}) => {
  return (
    <div className={`flex justify-between items-center gap-2 px-4 py-3 rounded-full shadow-lg text-sm font-bold bg-${bgColor} text-${color}` }>
        <Icon size={20}/>
      {tagName}
    </div>
  )
}

export default Tag
