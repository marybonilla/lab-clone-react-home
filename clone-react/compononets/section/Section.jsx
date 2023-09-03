import './Section.css'


function Section ({ isActive } ) {
    
    return (
        <div className={isActive ? 'sectionDark' : 'section'}>
            <h1 className='h1Section'>
            Crea interfaces de <br /> usuario a partir de <br /> componentes
            </h1>

            <p className='pSection'>
            React te permite construir interfaces de usuario a partir de piezas individuales <br />  llamadas componentes. Crea tus propios componentes de React como <br />  Thumbnail, LikeButton, y Video. Luego combínalos para formar pantallas, <br />  páginas y aplicaciones.
            </p>
        </div>

    )

}


export default Section;