import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Cita = ({ cita }) => {
  return (
    <Fragment>
      <h1>Nombre cita: {cita.nombre}</h1>
      <div className="container mt-5 py-5">
        <div className="col-12 mb-5 d-flex justify-content-center">
          <Link
            to={'/'}
            className="btn btn-success text-uppercase py-2
                    px-5 font-weight-bold"
          >
            Volver
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Cita
