import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { BodyLanding } from './BodyLanding';
import { Timeli } from '../Timeline/Timeli';
import { Informacion } from '../info/Informacion';
import { Invitados } from '../asistencia/Invitados';

const Home = () => <BodyLanding/>;
const Info = () => <Informacion/>;
const Timeline = () => <Timeli/>;
const Invitado = () => <Invitados />


export const NavLanding = () => {
  return (
    <>
      <nav>
        <h4 className='navH' > 
          <Link to="/">Home</Link>
        </h4>
        <h4 className='navH' >
          <Link to="/info">Detalles</Link>
        </h4>
        <h4 className='navH'>
          <Link to="/timeline">Timeline</Link>
        </h4>
        <h4 className='navH'>
          <Link to="/invitado">Invitados</Link>
        </h4>
      </nav>

      <Routes>
        <Route path="/invitado" element={<Invitado />} />
        <Route path="/info" element={<Info />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
