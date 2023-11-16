import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { BodyLanding } from './BodyLanding';
import { Timeli } from '../Timeline/Timeli';
import { Informacion } from '../info/Informacion';
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

const Home = () => <BodyLanding/>;
const Info = () => <Informacion/>;
const Timeline = () => <Timeli/>;
const In2 = () => <I2 />;
const In3 = () => <I3 />;
const In4 = () => <I4 />;
const In5 = () => <I5 />;
const In6 = () => <I6 />;
const In7 = () => <I7 />;
const In8 = () => <I8 />;
const In9 = () => <I9 />;
const In10 = () => <I10 />;
const In11 = () => <I11 />;
const In12 = () => <I12 />;
const In13 = () => <I13 />;
const In14 = () => <I14 />;
const In15 = () => <I15 />;
const In16 = () => <I16 />;
const In17 = () => <I17 />;
const In18 = () => <I18 />;

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
        <h4 className='hidd'><Link to="/02122302">In2</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In3</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In4</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In5</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In6</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In7</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In8</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In9</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In10</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In11</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In12</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In13</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In14</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In15</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In16</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In17</Link></h4>
        <h4 className='hidd'><Link to="/02122302">In18</Link></h4>
      </nav>

      <Routes>
        <Route path="/02122302" element={<In2 />} />
        <Route path="/02122303" element={<In3 />} />
        <Route path="/02122304" element={<In4 />} />
        <Route path="/02122305" element={<In5 />} />
        <Route path="/02122306" element={<In6 />} />
        <Route path="/02122307" element={<In7 />} />
        <Route path="/02122308" element={<In8 />} />
        <Route path="/02122309" element={<In9 />} />
        <Route path="/02122310" element={<In10 />} />
        <Route path="/02122311" element={<In11 />} />
        <Route path="/02122312" element={<In12 />} />
        <Route path="/02122313" element={<In13 />} />
        <Route path="/02122314" element={<In14 />} />
        <Route path="/02122315" element={<In15 />} />
        <Route path="/02122316" element={<In16 />} />
        <Route path="/02122317" element={<In17 />} />
        <Route path="/02122318" element={<In18 />} />
        <Route path="/info" element={<Info />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
