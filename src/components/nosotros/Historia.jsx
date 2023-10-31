import React, { useEffect, useState } from 'react';
import Mensaje from './Mensaje';
import { Mensaje2 } from './Mensaje2';

export const Nosotros = () => {
  const [hideDiv1, setHideDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setHideDiv1(true);
    }, 16000); 

    const timeout2 = setTimeout(() => {
      setShowDiv2(true);
    }, 16000); 

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div>
      <div style={{ opacity: hideDiv1 ? 0 : 1, transition: 'opacity 1s' }}>
        <Mensaje />
      </div>
      <div style={{ opacity: showDiv2 ? 1 : 0, transition: 'opacity 1s' }}>
        <Mensaje2/>
      </div>
    </div>
  );
};
