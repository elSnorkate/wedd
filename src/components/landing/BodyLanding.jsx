import React, { useState } from 'react';
import TiempoHasta from './TiempoHasta';
import Imagenes from '../../assets/AlmacenImagenes';

function TextTransformation() {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div id="text-transformation-container">
      <h4
        className={`text ${isHovered ? 'hidden' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        
        <img src={Imagenes.Logo} alt="Logo" id='logoDetalle' />
        
      </h4>
      <h1
        className={`text ${isHovered ? '' : 'hidden'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <TiempoHasta />
      </h1>
    </div>
  );
}

export const BodyLanding = () => {
  return (
    <body>
      <div id='bodybox'>
        <TextTransformation />
      </div>
    </body>
  );
};
