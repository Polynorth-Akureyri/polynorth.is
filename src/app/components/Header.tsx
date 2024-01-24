import Image from 'next/image'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header>
      <nav
        className="navbar is-transparent is-fixed-top"
        id="main-header"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://polynorth.is">
            <Image
              id="logo-image"
              src="/images/PolynorthLogoWide01.png"
              alt="Polynorth logo"
              width={128}
              height={64}
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="header-menu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#products">
              Vörur
            </a>
            <a className="navbar-item" href="#quality">
              Framleiðsla
            </a>
            <a className="navbar-item" href="#about1">
              Um Polynorth
            </a>
            <a className="navbar-item" href="#contact">
              Hafa Samband
            </a>
            <a className="navbar-item" href="#reiknivel">
              Reiknivél
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
