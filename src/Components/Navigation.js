import React from 'react'
import logo from '../Images/logo.svg'

export default function Navigation() {
  return (
<div>
  <nav className = "gradient-bg">
    <div className="container mx-auto px-10 mb-8 top-0 z-10">
      <div className="w-full flex flex-col py-4">
        <div className="flex items-center justify-center my-1">
          <span className="cursor-pointer font-bold text-4xl text-white">
            <img className = "inline mr-2 " src = {logo}/>
            <h1 className = "inline branded" >Horoscoop</h1>
          </span>
        </div>
       </div>
    </div>
  </nav>
</div>
  )
}
