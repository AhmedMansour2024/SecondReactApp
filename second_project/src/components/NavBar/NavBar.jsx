import { Container, Nav, Navbar } from 'react-bootstrap'
import './navbar.css'
import { NavLink } from 'react-router-dom';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

function NavBar() {
    const isAuth = useSelector(state => state.authSlice.isAuth);
    return (
        <>
            <Navbar expand='lg'>
                <Container >
                    <Navbar.Brand href="#home">
                        <img className='navbar-logo' src="assets/images/logo1.png" alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex justify-content-between align-items-center w-100">
                            <div className="d-flex gap-3">
                                <NavLink to="/" className="nav__link text-decoration-none text-black">
                                    Home
                                </NavLink>
                                <NavLink to="/shop" className="nav__link text-decoration-none text-black">
                                    Shop
                                </NavLink>
                                <NavLink to="/cart" className="nav__link text-decoration-none text-black">
                                    Cart
                                </NavLink>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                {isAuth ? <LogoutBtn /> : <Fragment>
                                    <NavLink to="/login" className="nav__link text-decoration-none text-black">
                                        Login
                                    </NavLink>
                                    <NavLink to="/register" className="nav__link text-decoration-none text-black">
                                        Register
                                    </NavLink>

                                </Fragment>}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;