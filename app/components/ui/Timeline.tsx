"use client"
import React, { useEffect, useState } from 'react'
import { BookmarkCheck } from 'lucide-react'
import Tag from './Tag'

const Timeline = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on load
    const timer = setTimeout(() => setVisible(true), 100); // Add delay for better effect
    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="flex flex-col justify-between items-start gap-10 relative">
      {/* Timeline Line */}
      <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-300"></div>

      {/* Tags with animations */}
      <div className={`transition-all duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <Tag bgColor="lighterPrimary" color="secondary" tagName="Generate tailored test cases for unit, integration and end-to-end(E2E) testing in seconds" Icon={BookmarkCheck}/>
      </div>
      <div className={`transition-all duration-500 ease-in-out delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <Tag bgColor="lighterPrimary" color="secondary" tagName="Run tests seamlessly across environments with detailed logs for every failure" Icon={BookmarkCheck}/>
      </div>
      <div className={`transition-all duration-500 ease-in-out delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <Tag bgColor="lighterPrimary" color="secondary" tagName="Receive pinpointed resolutions for failing tests, powered by advanced AI insights" Icon={BookmarkCheck}/>
      </div>
      <div className={`transition-all duration-500 ease-in-out delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <Tag bgColor="lighterPrimary" color="secondary" tagName="Test backend systems and databases integrations with unparalleled speed and accuracy" Icon={BookmarkCheck}/>
      </div>
    </div>
  )
}

export default Timeline
