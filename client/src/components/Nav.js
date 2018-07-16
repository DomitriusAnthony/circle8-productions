import React from 'react';

const Nav = () => (
    <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <div className="navbar-item">
                <div className="field is-grouped">
                    <p className="control">
                        <span className="icon">
                            <a href="https://www.facebook.com/Circle-8-Productions-224807644607749/" style={{color: 'inherit', textDecoration: 'none'}}><i className="fab fa-facebook-f"></i></a>
                        </span>
                    </p>
                    <p className="control">
                        <span className="icon">
                            <a href="https://twitter.com/Circle8TV" style={{color: 'inherit', textDecoration: 'none'}}><i className="fab fa-twitter"></i></a>
                        </span>
                    </p>
                    <p className="control">
                        <span className="icon">
                            <a href="https://www.instagram.com/circle8productions/?hl=en" style={{color: 'inherit', textDecoration: 'none'}}><i className="fab fa-instagram"></i></a>
                        </span>
                    </p>
                </div>
            </div>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div className="navbar-end">
            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#">
                        Home
                    </a>
                    <a className="navbar-item" href="#">
                        Filler
                    </a>
                    <a className="navbar-item" href="#">
                        More
                    </a>
                </div>
            </div>
        </div>
    </nav>
)

export default Nav;