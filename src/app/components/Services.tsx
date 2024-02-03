import React from 'react'

const Services: React.FC = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <div>
              <div className="columns is-multiline">
                <div className="column is-full py-0">
                  <div className="columns servicetitle">
                    <div className="column is-one-third">
                      <h1 className="title is-1">01</h1>
                    </div>
                    <div className="column is-two-thirds servicetag">
                      <p className="subtitle">Fagmennska</p>
                    </div>
                  </div>
                </div>
                <div className="column is-full servicetext">
                  <p>
                    Við höfum mikla reynslu í byggingariðnaðinum og langa sögu í
                    framleiðslu af einangrunarplasti. Þannig getur þú verið viss
                    um að við munum við þjóna öllum af fagmennsku og metnaði.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div>
              <div className="columns is-multiline">
                <div className="column is-full py-0">
                  <div className="columns servicetitle">
                    <div className="column is-one-third">
                      <h1 className="title is-1">02</h1>
                    </div>
                    <div className="column is-two-thirds py-0 servicetag">
                      <p className="subtitle">Góð þjónusta</p>
                    </div>
                  </div>
                </div>
                <div className="column is-full servicetext">
                  <p>
                    Við höfum metnað í að gera vel og munum leggja okkur fram
                    við að veita persónulega og alhliða þjónustu fyrir alla
                    viðskiptavini… stóra sem smáa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div>
              <div className="columns is-multiline">
                <div className="column is-full py-0">
                  <div className="columns servicetitle">
                    <div className="column is-one-third">
                      <h1 className="title is-1">03</h1>
                    </div>
                    <div className="column is-two-thirds py-0 servicetag">
                      <p className="subtitle">Lipurð og traust</p>
                    </div>
                  </div>
                </div>
                <div className="column is-full servicetext">
                  <p>
                    Verkefnin sem viðskiptavinir okkar takast á við eru mörg og
                    ólík. Þess vegna vitum við að það er nauðsynlegt að vinna
                    traust með því að setja sig inn í verkefnin og sýna lipurð
                    til þess að leysa hvert verkefni sem best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
