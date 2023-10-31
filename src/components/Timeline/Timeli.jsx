import React from 'react'
import Imagenes from '../../assets/AlmacenImagenes'
export const Timeli = () => {
  return (
   <>
   <div className="scrollable-timeline">
   <div className='timeline'>
    <div className='container right-continer'>
      <img src={Imagenes.I1} alt="recepcion" style={{width: '30px', background: 'white', padding: '3px'}} />
      <div className='text-box'>
        <h2>Recepcion</h2>
        <small>11:00</small>
        <p className='description'>El gran día comienza con la emocionante recepción, donde amigos y familiares se reúnen para celebrar el amor que florece en este hermoso enlace. </p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
    <div className='container left-continer'>
      <img src={Imagenes.I2} alt="ceremonia" style={{width: '30px', background: 'white', padding: '3px'}} />
      <div className='text-box'>
        <h2>Ceremonia</h2>
        <small>12:00</small>
        <p className='description'> El momento más solemne y significativo del día ha llegado. La ceremonia, llena de amor y promesas eternas, se lleva a cabo bajo el cálido sol del mediodía. Dos almas se unen en un compromiso eterno.</p>
        <span className='left-container-arrow'></span>
      </div>
    </div>
    <div className='container right-continer'>
      <img src={Imagenes.I3} alt="camara" style={{width: '30px', background: 'white', padding: '3px'}} />
      <div className='text-box'>
        <h2>Sesion de fotos</h2>
        <small>12:30</small>
        <p className='description'>Es hora de capturar los momentos más hermosos y mágicos de este día especial. La sesión de fotos se lleva a cabo, inmortalizando la felicidad y el amor en cada instantánea.</p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
    <div className='container left-continer'>
      <img src={Imagenes.I4} alt="brindis" style={{width: '30px', background: 'white', padding: '3px'}} />
      <div className='text-box'>
        <h2>Brindis</h2>
        <small>14:00</small>
        <p className='description'>La celebración continúa con un elegante brindis. Copas en alto, los invitados expresan sus mejores deseos para la feliz pareja, celebrando la unión que ahora perdurará por siempre. Es un momento de alegría y camaradería.</p>
        <span className='left-container-arrow'></span>
      </div>
    </div>
    <div className='container right-continer'>
      <img src={Imagenes.Regalos} alt="regalos" style={{width: '30px', background: 'white', padding: '3px'}} />
      <div className='text-box'>
        <h2>Regalos</h2>
        <small>14:30</small>
        <p className='description'>Los regalos y buenos deseos fluyen mientras los invitados demuestran su cariño hacia la nueva pareja. Cada regalo es un símbolo de amor y amistad, y cada palabra de felicitación es un recordatorio de la belleza del amor compartido.</p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
    <div className='container left-continer'>
      <img src={Imagenes.I6} alt="comida oink oink"  style={{width: '30px', background: 'white', padding: '3px'}}/>
      <div className='text-box'>
        <h2>Almuerzo</h2>
        <small>15:00</small>
        <p className='description'>Un delicioso almuerzo que reúne a todos en un festín exquisito. Mientras se comparten risas, el banquete simboliza la abundancia y la prosperidad en el camino de la vida compartido por los recién casados.</p>
        <span className='left-container-arrow'></span>
      </div>
    </div>
    <div className='container right-continer'>
      <img src={Imagenes.I7} alt="baile"  style={{width: '30px', background: 'white', padding: '3px'}}/>
      <div className='text-box'>
        <h2>Baile</h2>
        <small>16:00</small>
        <p className='description'> El clímax de este día tan esperado finalmente llega con el emocionante baile. Las emociones son intensas mientras los recién casados abren la pista de baile y comparten su primera danza como marido y mujer.</p>
        <span className='right-container-arrow'></span>
      </div>
    </div>
   </div>
   </div>
   </>
  )
}
