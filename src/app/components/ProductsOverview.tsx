'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ProductsOverview: React.FC = () => {
  const [activeProdId, setActiveProdId] = useState('pl-1')
  console.log(activeProdId)

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="column has-text-centered">
          <h1 className="title is-2">Vörurúrval</h1>
          <h1 className="title is-4">
            Polynorth framleiðir EPS einangrunarplast til byggingarframkvæmda,
            fyrir sökkla, plötur, veggi og þök.
          </h1>
          <br />
          <p className="subtitle ">
            EPS stendur fyrir Expandable Polystyrene og er í daglegu tali kallað
            frauðplast. Það inniheldur 2% af plasti og 98% af lofti og hefur þar
            af leiðandi mjög góða einangrunareiginleika. Það er einstaklega létt
            og auðvelt að vinna en hefur góðan styrk við lága eðlisþyngd. EPS er
            áreiðanlegt og endingargott byggingarefni og er því góður kostur við
            val fyrir byggingarframkvæmdir.
          </p>
          <br />
        </div>
        <div className="tabs is-centered is-hidden-mobile">
          <ul>
            <li
              className={`prod-link ${activeProdId === 'pl-1' && 'is-active'}`}
            >
              <a onClick={() => setActiveProdId('pl-1')}>Innanhúss einangrun</a>
            </li>
            <li
              className={`prod-link ${activeProdId === 'pl-2' && 'is-active'}`}
            >
              <a onClick={() => setActiveProdId('pl-2')}>Utanhúss einangrun</a>
            </li>
            <li
              className={`prod-link ${activeProdId === 'pl-3' && 'is-active'}`}
            >
              <a onClick={() => setActiveProdId('pl-3')}>Sökkul einangrun</a>
            </li>
            <li
              className={`prod-link ${activeProdId === 'pl-4' && 'is-active'}`}
            >
              <a onClick={() => setActiveProdId('pl-4')}>Plötu einangrun</a>
            </li>
            <li
              className={`prod-link ${activeProdId === 'pl-5' && 'is-active'}`}
            >
              <a onClick={() => setActiveProdId('pl-5')}>Þak einangrun</a>
            </li>
          </ul>
        </div>
        <div className="columns" id="productscontainer">
          <button
            onClick={() => setActiveProdId('pl-1')}
            className={`column is-12 product-title is-hidden-desktop is-hidden-tablet`}
          >
            <h4
              className={`subtitle is-4 prod-link ${
                activeProdId == 'pl-1' ? 'is-active' : ''
              }`}
              id="mobprod-1"
            >
              Innanhúss einangrun
            </h4>
          </button>
          <div
            className={`single-product ${
              activeProdId == 'pl-1' ? 'column visible' : 'hidden'
            }`}
          >
            <div className="columns is-multiline is-centered ">
              <div className="column is-2 prod-icon">
                <Image
                  alt="Skýringarmynd fyrir vegg"
                  src="/images/Vegg_Icon.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="column is-3 prod-small-title">
                <h5 className="subtitle">Innanhúss einangrun</h5>{' '}
                <p>vrnr.: PN-17-01-xxx</p>
              </div>
              <div className="column is-7 prod-details">
                <p>
                  Innanhúss einangrun er til í mörgum stærðum en aðallega 500 x
                  1000 og 1000 x 3000. Einnig er hægt að fá sérskornar stærðir.
                </p>
                <p>
                  Rúmþyngd 16-17kg/m³ nema óskað sé eftir öðru. Þessi vara er
                  yfirleitt til á lager.
                </p>
                <p>
                  <br />
                  <b>Notkun:</b> Innan á steypta útveggi þar sem gerð er krafa
                  um hátt einangrunargildi.
                </p>
              </div>
              <div className="table-container">
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr className="is-danger text-white">
                      <th>Þykkt</th>
                      <th>Stærð(mm)</th>
                      <th>Vörunúmer</th>
                      <th>Rúmþyngd</th>
                      <th>Pökkun</th>
                      <th>m²</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>25</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-17-01-025</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                      <td>
                        <span>40 plötur</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>50</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-17-01-050</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                      <td>
                        <span>20 plötur</span>
                      </td>
                      <td>
                        <span>10</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>75</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-17-01-075</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                      <td>
                        <span>13 plötur</span>
                      </td>
                      <td>
                        <span>6,5</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>100</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-17-01-100</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                      <td>
                        <span>10 plötur</span>
                      </td>
                      <td>
                        <span>5</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>125</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-17-01-125</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                      <td>
                        <span>8 plötur</span>
                      </td>
                      <td>
                        <span>4</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            onClick={() => setActiveProdId('pl-2')}
            className={`column is-12 product-title is-hidden-desktop is-hidden-tablet`}
          >
            <h4
              className={`subtitle is-4 prod-link ${
                activeProdId == 'pl-2' ? 'is-active' : ''
              }`}
              id="mobprod-2"
            >
              Utanhúss einangrun
            </h4>
          </button>
          <div
            className={`single-product ${
              activeProdId == 'pl-2' ? 'column visible' : 'hidden'
            }`}
            id="product-2"
          >
            <div className="columns is-multiline is-centered ">
              <div className="column is-2 prod-icon">
                <Image
                  alt="Skýringarmynd fyrir úti einangrun"
                  src="/images/Uti_icon.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="column is-3 prod-small-title">
                <h5 className="subtitle">Utanhúss einangrun</h5>{' '}
                <p>vrnr.: 2001401xxx</p>
              </div>
              <div className="column is-7 prod-details">
                <p>
                  Utanhúss einangrun er til í mörgum stærðum en algengast er 500
                  x 1000 og 1000 x 3000 en einnig er hægt að fá sérskornar
                  stærðir.
                </p>
                <p>
                  Rúmþyngd 24 kg/m³ nema óskað sé eftir öðru. Þessi vara er
                  yfirleitt til á lager.
                </p>
                <p>
                  <br />
                  <b>Notkun:</b> Utan á steypta veggi þar sem gerð er krafa um
                  hátt einangrunargildi og rakamótstöðu.
                </p>
              </div>
              <div className="table-container">
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr className="is-danger text-white">
                      <th>Þykkt</th>
                      <th>Stærð(mm)</th>
                      <th>Vörunúmer</th>
                      <th>Rúmþyngd</th>
                      <th>Pökkun</th>
                      <th>m²</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>25</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-24-01-025</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                      <td>
                        <span>40 plötur</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>50</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-24-01-050</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                      <td>
                        <span>20 plötur</span>
                      </td>
                      <td>
                        <span>10</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>75</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-24-01-075</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                      <td>
                        <span>13 plötur</span>
                      </td>
                      <td>
                        <span>6,5</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>100</span>
                      </td>
                      <td>
                        <span>500x1000</span>
                      </td>
                      <td>
                        <span>PN-24-01-100</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                      <td>
                        <span>10 plötur</span>
                      </td>
                      <td>
                        <span>5</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            onClick={() => setActiveProdId('pl-3')}
            className="column is-12 product-title is-hidden-desktop is-hidden-tablet"
          >
            <h4
              className={`subtitle is-4 prod-link ${
                activeProdId == 'pl-3' ? 'is-active' : ''
              }`}
              id="mobprod-3"
            >
              Sökkul einangrun
            </h4>
          </button>
          <div
            className={`single-product ${
              activeProdId == 'pl-3' ? 'column visible' : 'hidden'
            }`}
            id="product-3"
          >
            <div className="columns is-multiline is-centered ">
              <div className="column is-2 prod-icon">
                <Image
                  alt="Skýringarmynd fyrir sökkul"
                  src="/images/Sökkul_icon.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="column is-3 prod-small-title">
                <h5 className="subtitle">Sökkul einangrun</h5>{' '}
                <p>vrnr.: PN-17-02-xxx og PN-24-02-xxx</p>
              </div>
              <div className="column is-7 prod-details">
                <p>Hægt er að fá sökkulplast eftir máli.</p>
                <p>
                  Rúmþyngd 16-17 kg og 24 kg/m³. Panta þarf vöruna með
                  fyrirvara.
                </p>
                <p>
                  <br />
                  <b>Notkun:</b> Er notuð innan og/eða utan á sökkul. Hentar vel
                  þar sem einangrunin þarf að standa af sér mikinn þrýsting og
                  hafa góða rakamótstöðu.
                </p>
              </div>
              <div className="table-container">
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr className="is-danger text-white">
                      <th>Þykkt</th>
                      <th>Stærð(mm)</th>
                      <th>Vörunúmer</th>
                      <th>Rúmþyngd</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>50</span>
                      </td>
                      <td>
                        <span>600, 700 800, 900 x3000</span>
                      </td>
                      <td>
                        <span>PN-17-02-050</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>75</span>
                      </td>
                      <td>
                        <span>600, 700 800, 900 x3000</span>
                      </td>
                      <td>
                        <span>PN-17-02-075</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>100</span>
                      </td>
                      <td>
                        <span>600, 700 800, 900 x3000</span>
                      </td>
                      <td>
                        <span>PN-17-02-100</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>&nbsp;</span>
                      </td>
                      <td>
                        <span>&nbsp;</span>
                      </td>
                      <td>
                        <span>&nbsp;</span>
                      </td>
                      <td>
                        <span>&nbsp;</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>50</span>
                      </td>
                      <td>
                        <span>600, 700 800, 900 x3000</span>
                      </td>
                      <td>
                        <span>PN-24-02-050</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>75</span>
                      </td>
                      <td>
                        <span>600, 700 800, 900 x3000</span>
                      </td>
                      <td>
                        <span>PN-24-02-075</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>100</span>
                      </td>
                      <td>
                        <span>600, 700 800, 900 x3000</span>
                      </td>
                      <td>
                        <span>PN-24-02-100</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            onClick={() => setActiveProdId('pl-4')}
            className="column is-12 product-title is-hidden-desktop is-hidden-tablet"
          >
            <h4
              className={`subtitle is-4 prod-link ${
                activeProdId == 'pl-4' ? 'is-active' : ''
              }`}
              id="mobprod-4"
            >
              Plötu einangrun
            </h4>
          </button>
          <div
            className={`single-product ${
              activeProdId == 'pl-4' ? 'column visible' : 'hidden'
            }`}
            id="product-4"
          >
            <div className="columns is-multiline is-centered ">
              <div className="column is-2 prod-icon">
                <Image
                  alt="Skýringarmynd fyrir plötueinangrun"
                  src="/images/Plötueinangrun.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="column is-3 prod-small-title">
                <h5 className="subtitle">Plötu einangrun</h5>{' '}
                <p>vrnr.: PN-17-03-xxx og PN-24-03-xxx</p>
              </div>
              <div className="column is-7 prod-details">
                <p>
                  Algengustu stærðir eru 1x3m. Þykktir eru 50mm,75mm og 100mm.
                  Einnig er hægt að fá sérskonar stærðir.
                </p>
                <p>Rúmþyngd 24 kg/m³. Þessi vara er yfirleitt til á lager.</p>
                <p>
                  <br />
                  <b>Notkun:</b> Hér koma notkunarleidbeingingar von brádar.
                </p>
              </div>
              <div className="table-container">
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr className="is-danger text-white">
                      <th>Þykkt</th>
                      <th>Stærð(mm)</th>
                      <th>Vörunúmer</th>
                      <th>Rúmþyngd</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>50</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-17-03-050</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>75</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-17-03-075</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>100</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-17-03-100</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>150</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-17-03-150</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>200</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-17-03-200</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>&nbsp;</span>
                      </td>
                      <td>
                        <span>&nbsp;</span>
                      </td>
                      <td>
                        <span>&nbsp;</span>
                      </td>
                      <td>
                        <span>&nbsp;</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>50</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-24-03-050</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>75</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-24-03-075</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>100</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-24-03-100</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>150</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-24-03-150</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>200</span>
                      </td>
                      <td>
                        <span>1000x3000</span>
                      </td>
                      <td>
                        <span>PN-24-03-200</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            onClick={() => setActiveProdId('pl-5')}
            className="column is-12 product-title is-hidden-desktop is-hidden-tablet"
          >
            <h4
              className={`subtitle is-4 prod-link ${
                activeProdId == 'pl-4' ? 'is-active' : ''
              }`}
              id="mobprod-5"
            >
              Þak einangrun
            </h4>
          </button>
          <div
            className={`single-product ${
              activeProdId == 'pl-5' ? 'column visible' : 'hidden'
            }`}
            id="product-5"
          >
            <div className="columns is-multiline is-centered ">
              <div className="column is-2 prod-icon">
                <Image
                  alt="Skýringarmynd fyrir það"
                  src="/images/Thak_Icon.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="column is-3 prod-small-title">
                <h5 className="subtitle">Þak einangrun</h5>{' '}
                <p>PN-17-ÞAK & PN-24-ÞAK</p>
              </div>
              <div className="column is-7 prod-details">
                <p>
                  Þessi vara er sniðskorin eftir máli. Þegar pöntuð er
                  sniðskorin þak einangrun þarf að gefa upp mál á sniðskurðinum,
                  t.a.m mestu og minnstu þykkt á sniðskurðinum.
                </p>
                <p>
                  Rúmþygd er 16-17kg og 24kg/m³. Panta þarfa vöruna með
                  fyrirvara.
                </p>
                <p>
                  <br />
                  <b>Notkun:</b> Ofan á flöt þök, undir þakdúk eða þakpapappa,
                  ofan á steypta plötu fyrir uppstólað þak, þar sem þörf er á
                  háu einangrunargildi, þrýstiþoli og góðrar rakamótstöðu.
                </p>
              </div>
              <div className="table-container">
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr className="is-danger text-white">
                      <th>Þykkt og stærð</th>
                      <th>Vörunúmer</th>
                      <th>Rúmþyngd</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>Sniðskorin eftir máli</span>
                      </td>
                      <td>
                        <span>PN-17-ÞAK</span>
                      </td>
                      <td>
                        <span>17 kg/m³</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Sniðskorin eftir máli</span>
                      </td>
                      <td>
                        <span>PN-24-ÞAK</span>
                      </td>
                      <td>
                        <span>24 kg/m³</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsOverview
