import React, { useState } from 'react';
import { I2 } from '../Invitaciones/uwu/02/I2';
import { I3 } from '../Invitaciones/uwu/03/I3';
import { I4 } from '../Invitaciones/uwu/04/I4';
import { I5 } from '../Invitaciones/uwu/05/I5';
import { I6 } from '../Invitaciones/uwu/06/I6';
import { I7 } from '../Invitaciones/uwu/07/I7';
import { I8 } from '../Invitaciones/uwu/08/I8';
import { I9 } from '../Invitaciones/uwu/09/I9';
import { I10 } from '../Invitaciones/uwu/10/I10';
import { I11 } from '../Invitaciones/uwu/11/I11';
import { I12 } from '../Invitaciones/uwu/12/I12';
import { I13 } from '../Invitaciones/uwu/13/I13';
import { I14 } from '../Invitaciones/uwu/14/I14';
import { I15 } from '../Invitaciones/uwu/15/I15';
import { I16 } from '../Invitaciones/uwu/16/I16';
import { I17 } from '../Invitaciones/uwu/17/I17';
import { I18 } from '../Invitaciones/uwu/18/I18';
import { I19 } from '../Invitaciones/uwu/19/I19';
import { I20 } from '../Invitaciones/uwu/20/I20';
import { I21 } from '../Invitaciones/uwu/21/I21';
import { I22 } from '../Invitaciones/uwu/22/I22';
import { I23 } from '../Invitaciones/uwu/23/I23';
import { I24 } from '../Invitaciones/uwu/24/I24';
import { I25 } from '../Invitaciones/uwu/25/I25';
import { I26 } from '../Invitaciones/uwu/26/I26';

const componentsMap = {
  '02122302': I2,
  '02122303': I3,
  '02122304': I4,
  '02122305': I5,
  '02122306': I6,
  '02122307': I7,
  '02122308': I8,
  '02122309': I9,
  '02122310': I10,
  '02122311': I11,
  '02122312': I12,
  '02122313': I13,
  '02122314': I14,
  '02122315': I15,
  '02122316': I16,
  '02122317': I17,
  '02122318': I18, 
  '02122319': I19,
  '02122320': I20,
  '02122321': I21,
  '02122322': I22,
  '02122323': I23,
  '02122324': I24,
  '02122325': I25,
  '02122326': I26,  
};

export const Invitados = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;

    if (/^\d{0,8}$/.test(inputText)) {
      setInputValue(inputText);
    }
  };

  const getComponentForID = (id) => {
    return componentsMap[id] || null;
  };

  const SelectedComponent = getComponentForID(inputValue);

  return (
    <>
      {!SelectedComponent && (
        <div id='a8' className='cajaTipo1'  style={{ position: 'absolute', top: '50%', left: '45%', transform: 'translate(-50%, -50%)' }}>
          En caso haya recibido una invitación virtual, por favor inserte aquí su código <br /><br /><br />
          <input
            id='inputxd'
            type="text"
            maxLength={8}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      )}
      {SelectedComponent && <SelectedComponent uniqueID={inputValue} />}
    </>
  );
};
