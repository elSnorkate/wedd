import React from 'react'
import { EFC1 } from '../../02122301/EFC1'
import { EFC2 } from '../../02122301/EFC2'
import { I31 } from './I31'

export const I3 = () => {
  const uniqueID = '02122303';
  return (
    <>
    <div className='traka-container' id={uniqueID}>
    <EFC2/>
    <I31 />
    <EFC1/>
    </div>
    </>
    
  )
}

