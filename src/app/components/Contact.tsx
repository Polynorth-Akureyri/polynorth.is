import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="columns is-fluid">
        <div className="column is-half sm:px-12 px-6 py-10" id="contacttitle">
          <h1 className="title is-1">
            Alltaf gott veður
            <br />
            með Polynorth
          </h1>
        </div>
        <div className="is-half p-10" id="contactinfo">
          <h1 className="title">Við erum hér fyrir þig</h1>
          <p>
            Við höfum metnað í að gera vel og munum leggja okkur fram við að
            veita góða þjónustu með gildin okkar, fagmennska, lipurð og traust í
            fyrirrúmi.
          </p>
          <br />
          <p>
            Hægt er að senda fyrirspurnir, pantanir og beiðnir um verðtilboð í
            tölvupósti polynorth@polynorth.is eða í síma 462-7799 & 857-7799
          </p>
          <br />
          <a
            href="mailto:polynorth@polynorth.is"
            className="button is-link transition-all"
            id="contactbutton"
          >
            Hafðu samband
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
