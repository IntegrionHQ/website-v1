import React from 'react'
import { IconBaseProps } from 'react-icons'

const TechStack = ({Icon, language}:{
  Icon:React.ComponentType<IconBaseProps>,
  language:string
}) => {
  return (
    <div className='flex items-center justify-center gap-x-2 px-6 py-4 text-secondary text-lg font-medium group hover:shadow-2xl border-primary bg-lightPrimary  hover:cursor-pointer'>
      <Icon size={30} className="hidden group-hover:block transition"/>
      <span className='text-sm font-extrabold uppercase'>{language}</span>
    </div>
  )
}

export default TechStack
