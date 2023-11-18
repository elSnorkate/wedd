import React from 'react'
import Imagenes from '../../../assets/AlmacenImagenes'

export const EFC2 = () => {
  return (
    <>
    <div className='frase'>
      <p>
        El amor es como un rompecabezas: Siempre existe<br />
        en el mundo una persona que completa a otra, <br />
        y cuando se cruzan y los dos se encuentran, <br />
        las piezas cobran sentido. 
      </p>
    </div> 
    <div >
      <big className='bigI' style={{fontFamily:'Edu TAS Beginner', textDecoration:'underline dotted'}}>
          Nosotros nos hemos encontrado,   <br />
          Por eso...
      </big> <br />
        <h2 className='kg' style={{color:'white', fontSize:'990%'}}>!NOS CASAMOS¡</h2>
      <small className='smallS' style={{fontFamily:'Edu TAS Beginner' ,padding:'1rem',borderRadius:'1rem', backgroundColor:'white'}}>
        Y QUEREMOS QUE SEAS PARTE DE ESTE MOMENTO
      </small><br /><br /><br />
    </div>
    </>
  )
}
