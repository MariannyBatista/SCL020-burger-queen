import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { auth, signOut } from '../firebase/init'
import { withRouter } from 'react-router-dom'



const Navbar = (props) => {

    const cerrarSesion = () => {
        signOut(auth)
            .then(() => {
                props.history.push('/login')
            })
    }

    return (
        <div className='navbar'>
            <Link className='navbar-brand' to="/">VERDEN FOOD</Link>
            <div>
                <div className='d-flex'>
                    {/* <NavLink className="btn btn-dark mrg-2" to="/" exact>
                        Inicio
                    </NavLink> */}
                    {
                        props.firebaseUser !== null ? (
                            <NavLink className="btn btn-light mrg-2" to="/admin">
                                Admin
                            </NavLink>
                        ) : null
                    }

                    {
                        props.firebaseUser !== null ? (
                            <NavLink className="btn btn-light mrg-2" to="/welcome">
                                Soy Chef
                            </NavLink>
                        ) : null
                    }

                    {
                        props.firebaseUser !== null ? (
                            <NavLink className="btn btn-light mrg-2" to="/makeorder">
                                Haciendo Orden
                            </NavLink>
                        ) : null
                    }

                    {
                        props.firebaseUser !== null ? (
                            <button className="btn btn-light" onClick={() => cerrarSesion()} >Cerrar Sesión</button>
                        ) : (
                            <NavLink className="btn btn-light mrg-2" to="/login">
                                Login
                            </NavLink>

                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
