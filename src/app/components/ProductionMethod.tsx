import React from 'react'

const ProductionMethod: React.FC = () => {
  return (
    <section className="section" id="production">
      <div className="columns" id="productioncols">
        <div className="column is-half py-6 min-h-80" id="foamballs"></div>
        <div
          className="column is-half p-6 has-background-black"
          id="productiontext"
        >
          <p className="title has-text-white">
            Sköpunargleði & leikur með plastkúlum frá Polynorth
          </p>
          <p className="subtitle has-text-white">
            Kúlur eru seldar hjá okkur eftir vigt.
            <br />
            Þær eru notaðar í púða, gjafapúða ofl.
          </p>
          <p className="subtitle has-text-white">
            Einnig er hægt að fá áfyllingu á þessar vörur.
          </p>
          <br />
          <a
            href="mailto:polynorth@polynorth.is"
            className="button is-link transition-all"
            id="productionbutton"
          >
            Hafðu samband
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductionMethod
