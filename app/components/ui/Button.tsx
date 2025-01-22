"use client"
import React from 'react'

const Button = ({linkTag, callback}: 
    {
        linkTag:string,
        callback: ()=>void
    }
) => {
  return (
    <>
    <button onClick={callback} className='bg-primary px-5 py-3 font-medium text-secondary rounded-md text-sm hover:bg-lightPrimary transition-colors'>
    {linkTag}
    </button>
    </>
  )
}

export default Button
