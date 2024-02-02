import React from 'react'

const Quality: React.FC = () => {
  return (
    <section className="section" id="quality">
      <div className="columns" id="qualitycols">
        <div className="column is-half py-6 min-h-80" id="foamlogo"></div>
        <div
          className="column is-half p-6 has-background-black"
          id="qualitytext"
        >
          <p className="title has-text-white">Hágæða framleiðsla</p>
          <p className="has-text-white">
            Plastefnið í framleiðslu Polynorth er hágæða vara, flutt inn frá
            Finnlandi í 1.1 tonna staukum, og lítur út eins og fínkornað salt.
            Með heitri gufu í svonefndum forþenjara þenst hvert smákorn út eins
            og poppkorn og verður að plastkúlum.
          </p>
          <br />
          <p className="has-text-white">
            Síðan eru kúlurnar settar í kubbamót, þá er hleypt á þær 100 gráðu
            gufu og leitast þær við við að þenjast út og lofttæma mótið. Við
            kólnun festast kúlurnar saman og úr kemur plastkubbur sem er að
            stærð 1×0,5×3 sem er svo skorinn niður í hinar ýmsu þykktir.
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

export default Quality
