import React from 'react'
import { IconBaseProps } from 'react-icons'
const Tag = ({bgColor,color, tagName, Icon}:{
    bgColor:string,
    color:string,
    tagName:string,
    Icon: React.ComponentType<IconBaseProps>
}) => {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-start md:items-center w-full md:w-auto gap-2 px-4 py-3 rounded-lg md:rounded-full shadow-lg text-sm font-bold bg-${bgColor} text-${color}` }>
        <Icon size={20}/>
      {tagName}
    </div>
  )
}

export default Tag