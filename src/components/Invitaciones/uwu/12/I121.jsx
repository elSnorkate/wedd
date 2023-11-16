import Imagenes from '../../../../assets/AlmacenImagenes'

export const I121 = () => {
  return (
    <>
    
    <div className='invi'>
          <h2 className='kg1'>Derlin Chamarro Recines</h2>
            <small>Con la bendicion de Dios y nuestros padres</small>
            <div className='a3'>
              <div className='normalBox'>
                <img src={Imagenes.Madre} alt="madre" style={{height:'3rem'}} />
                <h4>Madre del novio</h4>
                <p> Fania Chuquillanqui Mendoza </p>
              </div>
              <div className='normalBox'>
                <img src={Imagenes.Padres} alt="padres" style={{height:'3rem'}} />
                <h4>Padres de la novia</h4>
                <p>Juan Barreto Segura +<br /> Marta Tunqui Pari</p> <br />
              </div>
            </div>
              <small>y asi tambien de nuestros padrinos:</small>
              <div id='a4' className='normalBox' style={{width:'70%', backgroundColor:'#f2d0bdc9'}}>
                <img src={Imagenes.Casados} alt="padres" style={{height:'3rem'}} />
                <div id='a5'>
                <h4>Felizmente casados</h4>
                <p>Meri Chuquillanqui Mendoza<br /> Isaac Zevallos Solis</p>
                </div>
              </div>
                <p>Es un placer invitarlos a nuestro gran dia</p>
                <img src={Imagenes.Entrada} id='a6' alt="padres" style={{height:'3rem'}} /> <br /> 
                <div className='frase' style={{height:'35px', backgroundColor:'#f2d0bd96',width:'90%', borderRadius:'1rem' }}> pase para 2 personas</div>
              </div>
    </>
  )
}
