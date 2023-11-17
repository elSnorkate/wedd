import React from 'react'
import { EFC1 } from '../../02122301/EFC1'
import { EFC2 } from '../../02122301/EFC2'
import { I21 } from './I21'

export const I2 = () => {
  const uniqueID = '02122302'
  return (
    <>
    <div className='traka-container' id={uniqueID}>
    <EFC1/>
    <EFC2/>
    <I21 />
    </div>
    </>
    
  )
}

