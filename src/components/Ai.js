import React from 'react'
import robot from '../images/robot.jpg'

function Ai({message}) {
  return (
    <div className='p-3 mt-4 flex justify-between max-w-[380px] md:max-w-[580px] '>

<div className="mr-3">
     <div className="w-12 h-12 rounded-full overflow-hidden"> 
    <img className='object-cover mb-2 w-full' src={robot} alt="" />
    </div>
    <p className="text-center text-white  text-lg">AI</p>
      </div>

    <div className="p-3 rounded-2xl bg-slate-700 text-white">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum repudiandae exercitationem accusamus corrupti odit ipsam maxime vero! Inventore aliquid, explicabo vel voluptatum eos autem debitis maxime! Ratione, iusto consectetur!ipsam maxime vero! Inventore aliquid, explicabo vel voluptatum eos autem debitis maxime! Ratione, iusto consectetur!
        {message}
      </p>
    </div>
    </div>
  )
}

export default Ai