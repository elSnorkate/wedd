import Imagenes from '../../../../assets/AlmacenImagenes'

export const I131 = () => {
  return (
    <>
    
    <div className='invi'>
          <h2 className='kg1'>Dante Cortes Ganoza</h2>
            <small>Con la bendicion de Dios y nuestros padres</small>
            <div className='a3'>
              <div className='normalBox'>
                <img src={Imagenes.Madre} alt="madre" style={{height:'2rem'}} />
                <h4 className='t1'>Madre del novio</h4>
                <p className='t2'> Fania Chuquillanqui M </p>
              </div>
              <div className='normalBox'>
                <img src={Imagenes.Padres} alt="padres" style={{height:'2rem'}} />
                <h4 className='t1' >Padres de la novia</h4>
                <p  className='t2' >Juan Barreto S +<br /> Marta Tunqui Pari</p> <br />
              </div>
            </div> <br /><br />
              <small>y asi tambien de nuestros padrinos:</small>
              <div id='a4' className='normalBox' style={{width:'70%', backgroundColor:'#f2d0bdc9'}}>
                <img src={Imagenes.Casados} alt="padres" style={{height:'2rem'}} />
                <h4 style={{fontSize:'9px', marginBottom:'-5px'}}>Felizmente casados</h4>
                <p>Meri Chuquillanqui M<br /> Isaac Zevallos Solis</p>
              </div>
                <p style={{ fontSize:'80%'}}>Es un placer invitarlos a nuestro gran dia</p>
                <img src={Imagenes.Entrada} id='a6' alt="padres" style={{height:'2.5rem'}} /> <br /> 
                <div className='frase'  style={{height:'35px', background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242,208,189,1) 100%)', width:'90%'}}> pase para 2 personas</div>
              </div>
    </>
  )
}
