import React from 'react';
import Imagenes from '../../assets/AlmacenImagenes';
import { Preguntas } from './Preguntas';

export const Informacion = () => {
  return (
    <>
      <div className='Empaquetador1'>
        <div className='cajaTipo1'>
          <img src={Imagenes.Direccion} className='iconos-info' alt="dir" />
          <span className='linea1'></span>
          <p>Estamos encantados de invitarte a nuestra boda, que se llevará a cabo en la siguiente dirección: Av. La Molina 4180. ¡Esperamos verte allí!</p>
          <img src={Imagenes.FVerde} alt="Flor verde" className='Fverde'/>
        </div>
        <div className='cajaTipo1'>
          <img src={Imagenes.Reloj} className='iconos-info' alt="dir" />
          <span className='linea1'></span>
          <p>La puntualidad es esencial. El evento comenzará a las 11 AM en punto. ¡No querrás perderte ni un momento de esta celebración tan especial!</p>
          <img src={Imagenes.FVerde} alt="Flor verde" className='Fverde'/>
        </div>
        <div className='cajaTipo1'>
          <img src={Imagenes.Vestimenta} className='iconos-info' alt="dir" />
          <span className='linea1'></span>
          <p>Esperamos que todos se vistan con su mejor atuendo formal. Por favor, evita vestidos blancos o tonalidades similares en respeto a la novia.</p>
          <img src={Imagenes.FVerde} alt="Flor verde" className='Fverde'/>
        </div>
        <div className='cajaTipo1'>
          <img src={Imagenes.Regalos} className='iconos-info' alt="dir" />
          <span className='linea1'></span>
          <p>El regalo es opcional, la asistencia obligatoria. Pero si deseas tener un detalle con nosotros que mejor que contribuir con los fondos de nuestra luna de miel.</p>
          <img src={Imagenes.FVerde} alt="Flor verde" className='Fverde'/>
        </div>
        <div className='cajaTipo1'>
          <img src={Imagenes.Ninos} className='iconos-info' alt="dir" />
          <span className='linea1'></span>
          <p>Para nuestros pequeños invitados, pedimos a los padres que mantengan un ojo cariñoso en sus hijos durante el evento. Queremos que todos disfruten con seguridad.</p>
          <img src={Imagenes.FVerde} alt="Flor verde" className='Fverde'/>

        </div>
        <div className='cajaTipo1'>
          <img src={Imagenes.Celular} className='iconos-info' alt="dir" />
          <span className='linea1'></span>
          <p>Por favor, mantén tus dispositivos móviles en modo silencio durante la ceremonia. Queremos disfrutar el momento sin interrupciones. ¡Gracias por tu comprensión!</p>
          <img src={Imagenes.FVerde} alt="Flor verde" className='Fverde' />
        </div>
      </div>
      <div id='Informacion'>
        <div>
          <Preguntas/>
        </div>
      </div>
    </>
  );
};
