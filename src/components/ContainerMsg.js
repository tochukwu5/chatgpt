import React, { useState } from 'react'
import Ai from './Ai'
import User from './User'


function ContainerMsg() {

  

  return ( 
    <div  className='flex flex-col mt-5'>
      <Ai />
      <User />

           
    
    </div>
  )
}

export default ContainerMsg