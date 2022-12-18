import React from 'react'
import me from '../images/me.png'


function User() {

  return (
    <div className="self-end">
    <div className='p-3 mt-4 flex justify-between max-w-[380px] md:max-w-[580px] '>

<div className="mr-3">
     <div className="w-12 h-12 rounded-full overflow-hidden"> 
    <img className='object-cover mb-2 w-full' src={me} alt="" />
    </div>
    {/* <p className="text-center text-white  text-lg">ME</p> */}
      </div>

    <div className="p-3 rounded-2xl bg-slate-700 text-white">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum repudiandae exercitationem accusamus corrupti odit ipsam maxime vero! Inventore aliquid, explicabo vel voluptatum eos autem debitis maxime! Ratione, iusto consectetur!ipsam maxime vero! Inventore aliquid, explicabo vel voluptatum eos autem debitis maxime! Ratione, iusto consectetur!
      </p>
    </div>
    </div>
    </div>
  )    
}

export default User