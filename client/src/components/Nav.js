import React from 'react';

const Nav = () => (
    <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control">
                        <span class="icon">
                            <i class="fab fa-facebook-f"></i>
                        </span>
                    </p>
                    <p class="control">
                        <span class="icon">
                            <i class="fab fa-twitter"></i>
                        </span>
                    </p>
                    <p class="control">
                        <span class="icon">
                            <i class="fab fa-instagram"></i>
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
                    <a class="navbar-item" href="#">
                        Filler
                    </a>
                    <a class="navbar-item" href="#">
                        More
                    </a>
                </div>
            </div>
        </div>
    </nav>
)

export default Nav;