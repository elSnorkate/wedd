import React from 'react';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import { I2 } from '../uwu/02/I2';
import { I3 } from '../uwu/03/I3';
import { I4 } from '../uwu/04/I4';
import { I5 } from '../uwu/05/I5';
import { I6 } from '../uwu/06/I6';
import { I7 } from '../uwu/07/I7';
import { I8 } from '../uwu/08/I8';
import { I9 } from '../uwu/09/I9';
import { I10 } from '../uwu/10/I10';
import { I11 } from '../uwu/11/I11';
import { I12 } from '../uwu/12/I12';
import { I13 } from '../uwu/13/I13';
import { I14 } from '../uwu/14/I14';
import { I15 } from '../uwu/15/I15';
import { I16 } from '../uwu/16/I16';
import { I17 } from '../uwu/17/I17';
import { I18 } from '../uwu/18/I18';


export const MyRouter = () => {
  return (
  <>
    <Routes>
        <Route path="/02122302" element={<I2/>}  />
        <Route path="/02122303" element={<I3/>}  />
        <Route path="/02122304" element={<I4/>}  />
        <Route path="/02122305" element={<I5/>}  />
        <Route path="/02122306" element={<I6/>}  />
        <Route path="/02122307" element={<I7/>}  />
        <Route path="/02122308" element={<I8/>}  />
        <Route path="/02122309" element={<I9/>}  />
        <Route path="/02122310" element={<I10/>} />
        <Route path="/02122311" element={<I11/>} />
        <Route path="/02122312" element={<I12/>} />
        <Route path="/02122313" element={<I13/>} />
        <Route path="/02122314" element={<I14/>} />
        <Route path="/02122315" element={<I15/>} />
        <Route path="/02122316" element={<I16/>} />
        <Route path="/02122317" element={<I17/>} />
        <Route path="/02122318" element={<I18/>} />
    </Routes>
  </>
  )
}
