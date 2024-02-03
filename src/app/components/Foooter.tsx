import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-black text-white">
      <div className="content has-text-centered flex flex-col gap-7">
        <div className="relative flex-1 min-h-64">
          <Image
            className="is-square flex-1"
            src="/images/PolynorthLogoSq_White.png"
            alt="Polynorth logo"
            fill
            objectFit="contain"
          />
        </div>
        <p className="flex-1">
          Polynorth ehf // Óseyri 4 , 600 Akureyri // s. +354 857 7799 // kt.
          660887-1649 //{' '}
          <a
            href="mailto:polynorth@polynorth.is"
            className="text-white hover:text-red-400 transition-all"
          >
            polynorth@polynorth.is
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
