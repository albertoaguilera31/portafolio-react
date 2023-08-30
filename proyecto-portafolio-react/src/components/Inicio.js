import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
  <div className='home'>

    <h1>
      Hola, soy <strong>Alberto Aguilera</strong> y soy desarrollador web en Santiago de Chile.
      Ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo web</strong> en todo tipo de proyectos. 
    </h1> 

    <h2>
      Te ayudo a crear tu sitio web, así como a tener más relevancia y visibilidad
      en internet. <Link to="/contacto">Contacta conmigo.</Link>
    </h2>

    <section className='last-works'>
      <h2 className='heading'>
        Algunos de mis proyectos
      </h2>
      <p>Estos son algunos de mis trabajos en desarrollo web</p>

      <div className='works'>

      </div>
    </section>

  </div>
  )
}
