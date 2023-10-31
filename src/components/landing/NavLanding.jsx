import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { BodyLanding } from './BodyLanding';
import { Timeli } from '../Timeline/Timeli';
import { Informacion } from '../info/Informacion';

const Home = () => <BodyLanding/>;
const Info = () => <Informacion/>;
const Timeline = () => <Timeli/>;

export const NavLanding = () => {
  return (
    <>
      <nav>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h4>
          <Link to="/info">Detalles</Link>
        </h4>
        <h4>
          <Link to="/timeline">Timeline</Link>
        </h4>
      </nav>

      <Routes>
        <Route path="/info" element={<Info />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
