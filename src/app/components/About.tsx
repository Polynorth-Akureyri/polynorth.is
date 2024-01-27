import Image from 'next/image'
import React from 'react'

const About: React.FC = () => {
  return (
    <section className="section" id="about1">
      <div className="container">
        <div className="columns flex flex-col md:flex-row">
          <div className="column is-two-fifths flex-1">
            <h1 className="title">Polynorth ehf</h1>
            <p>
              Í apríl 2021 keyptu Hjörleifur Árnason og Hrafn Stefánsson
              fyrirtækið Polynorth ehf. af fyrirtækinu Oki ehf.
            </p>
            <p className="lg:pb-56 pb-10">
              Hrafn er vélfræðingur að mennt og hefur reynslu af
              plastframleiðslu bæði hérlendis og erlendis. Hjörleifur er
              viðskiptafræðingur og matreiðslumaður og hefur verið í
              fyrirtækjarekstri undanfarin ár, meðal annars í veitingageiranum.
            </p>
          </div>
          <div
            className="column relative flex-1 min-h-96 lg:min-h-fit "
            id="aboutimage"
          >
            <Image
              src="/images/polynorth-eigendur-768x512.jpg"
              alt="Eigendur Polynorth"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
