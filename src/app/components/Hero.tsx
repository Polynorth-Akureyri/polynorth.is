import React from 'react'

interface HeroProps {
  title: string
  subtitle: string
  image?: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section className="hero is-danger is-fullheight hero-image w-screen min-h-screen">
      <div className="hero-body ">
        <div className="container has-text-centered">
          <h1 className="title is-1">{title}</h1>
          <h2 className="subtitle is-2">{subtitle}</h2>
          <a href="#products">
            <span className="icon is-large mdi mdi-48px mdi-arrow-down-thick"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
