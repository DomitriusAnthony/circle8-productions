import React from 'react';

const Nav = () => (
    <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control">
                        <span class="icon">
                            <a href="https://www.facebook.com/Circle-8-Productions-224807644607749/" style={{color: 'inherit', textDecoration: 'none'}}><i class="fab fa-facebook-f"></i></a>
                        </span>
                    </p>
                    <p class="control">
                        <span class="icon">
                            <a href="https://twitter.com/Circle8TV" style={{color: 'inherit', textDecoration: 'none'}}><i class="fab fa-twitter"></i></a>
                        </span>
                    </p>
                    <p class="control">
                        <span class="icon">
                            <a href="https://www.instagram.com/circle8productions/?hl=en" style={{color: 'inherit', textDecoration: 'none'}}><i class="fab fa-instagram"></i></a>
                        </span>
                    </p>
                </div>
            </div>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-end">
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="#">
                        Home
                    </a>
                </div>
            </div>
        </div>
    </nav>
)

export default Nav;