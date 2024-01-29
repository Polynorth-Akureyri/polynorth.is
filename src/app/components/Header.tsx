'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Header: React.FC = () => {
  const [burgerActive, setBurgerActive] = useState(false)
  // useEffect(() => {
  //   document.querySelector('.navbar-burger').click(function () {
  //     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  //     $('.navbar-burger').toggleClass('is-active')
  //     $('.navbar-menu').toggleClass('is-active')
  //   })

  //   $('.navbar-menu a').click(function () {
  //     // If a link inside the menu is clicked, close the menu
  //     $('.navbar-burger').removeClass('is-active')
  //     $('.navbar-menu').removeClass('is-active')
  //   })
  // }, [])
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
            className={`navbar-burger ${
              burgerActive ? 'is-active' : ''
            } transition-all`}
            onClick={() => setBurgerActive(!burgerActive)}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="header-menu"
          className={`navbar-menu ${
            burgerActive ? 'is-active' : ''
          } transition-all`}
        >
          <div className="navbar-start">
            <a
              onClick={() => setBurgerActive(false)}
              className="navbar-item"
              href="/#products"
            >
              Vörur
            </a>
            <a
              onClick={() => setBurgerActive(false)}
              className="navbar-item"
              href="/#quality"
            >
              Framleiðsla
            </a>
            <a
              onClick={() => setBurgerActive(false)}
              className="navbar-item"
              href="/#about1"
            >
              Um Polynorth
            </a>
            <a
              onClick={() => setBurgerActive(false)}
              className="navbar-item"
              href="/#contact"
            >
              Hafa Samband
            </a>
            <a
              onClick={() => setBurgerActive(false)}
              className="navbar-item"
              href="/reiknivel"
            >
              Reiknivél
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
