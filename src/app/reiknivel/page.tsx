'use client'
import React, { useEffect, useState } from 'react'
import {
  formatNumber,
  numberToTwoDecimals,
  removeFormatting,
} from '../utils/formatters'
import FormComponent from './FormComponent'
import FormComponentThird from './FormComponentThird'

export default function Reiknivel() {
  const [fermetrarValue, setFermetrarValue] = useState('96')
  const [lodakaupValue, setLodakaupValue] = useState('3000000')
  const [teikningarValue, setTeikningarValue] = useState('3500000')
  const [byggingarstjoriValue, setByggingarstjoriValue] = useState('1000000')
  const [jardvegsskiptiValue, setJardvegsskiptiValue] = useState('3000000')
  const [veiturValue, setVeiturValue] = useState('1000000')

  const [samtalsValue, setSamtalsValue] = useState('11500000')

  useEffect(() => {
    setSamtalsValue(
      String(
        Number(removeFormatting(lodakaupValue)) +
          Number(removeFormatting(teikningarValue)) +
          Number(removeFormatting(byggingarstjoriValue)) +
          Number(removeFormatting(jardvegsskiptiValue)) +
          Number(removeFormatting(veiturValue))
      )
    )
  }, [
    lodakaupValue,
    teikningarValue,
    byggingarstjoriValue,
    veiturValue,
    jardvegsskiptiValue,
  ])

  // UNIT - PRICE - COST

  const [concreteVolumeValue, setConcreteVolumeValue] = useState(50000) // verð per rúmmeter af steypu
  const [wallsUnitValue, setWallsUnitValue] = useState(0) // Heildarlengd veggja að utanverðu í metrum (ummál húss)
  useEffect(() => {
    setWallsUnitValue(
      numberToTwoDecimals(Math.sqrt(Number(fermetrarValue)) * 4)
    )
  }, [fermetrarValue])
  const [sokkullHeightUnitValue, setSokkullHeightUnitValue] = useState(0.75) // Hæð sökkuls í metrum
  const [steyputhykktValue, setSteyputhykktValue] = useState(0.215) // Steypuþykkt í metrum

  const [sokkullFermetrarUnit, setSokkullFermetrarUnit] = useState(3)
  useEffect(() => {
    setSokkullFermetrarUnit(
      numberToTwoDecimals(sokkullHeightUnitValue * wallsUnitValue)
    )
  }, [sokkullHeightUnitValue, wallsUnitValue])
  const [sokkullFermetrarPriceValue] = useState(16864)
  const [sokkullFermetrarCostValue, setSokkullFermetrarCostValue] = useState(0)
  useEffect(() => {
    setSokkullFermetrarCostValue(
      numberToTwoDecimals(sokkullFermetrarUnit * sokkullFermetrarPriceValue)
    )
  }, [sokkullFermetrarPriceValue, sokkullFermetrarUnit])

  return (
    <main className="min-h-screen">
      <section className="section" id="products">
        <div className="container">
          <div className="column has-text-centered">
            <h1 className="title is-2">Reiknivél sem einfaldar málið!</h1>
            <br />
            <p className="subtitle ">
              Hver og einn þarf að reikna sitt verkefni með aðstoð
              byggingarstjóra og hönnuðar til að fá nákvæmari áætlun, þessi
              reiknivél er einungis til að aðstoðar og til að fá grófa hugmynd
              um kostnað.
            </p>
            <p>
              Í gula reiti þarf að setja inn helstu stærðir. Bláir reitir eru
              með meðal-eininga-verð og hægt að breyta. Aðrir reitir eru
              útreiknaðir og ekki hægt að breyta.
            </p>
            <br />
          </div>
          <div className="column">
            <form>
              <FormComponent
                text="Hvað á draumahúsið að vera margir fermetrar?"
                label={'Fermetrar m²'}
                numberValue={formatNumber(fermetrarValue)}
                handleInputChange={(event) =>
                  setFermetrarValue(removeFormatting(event.target.value))
                }
                color="yellow"
                unit="m²"
              />
              <h2 className="font-semibold text-xl py-10 text-center">
                Hérna uppfærir þú alla gula reiti með þínum tölum
              </h2>
              <FormComponent
                text={'Lóðakaupi kr.'}
                numberValue={formatNumber(lodakaupValue)}
                handleInputChange={(event) =>
                  setLodakaupValue(removeFormatting(event.target.value))
                }
                color="yellow"
                unit="kr."
              />
              <FormComponent
                text={'Allar teikningar sem farið er fram á í kr.'}
                numberValue={formatNumber(teikningarValue)}
                handleInputChange={(event) =>
                  setTeikningarValue(removeFormatting(event.target.value))
                }
                color="yellow"
                unit="kr."
              />
              <FormComponent
                text={'Byggingarstjóri í 3 ár kr.'}
                numberValue={formatNumber(byggingarstjoriValue)}
                handleInputChange={(event) =>
                  setByggingarstjoriValue(removeFormatting(event.target.value))
                }
                color="yellow"
                unit="kr."
              />
              <FormComponent
                text={'Jarðvegsskipti kr.'}
                numberValue={formatNumber(jardvegsskiptiValue)}
                handleInputChange={(event) =>
                  setJardvegsskiptiValue(removeFormatting(event.target.value))
                }
                color="yellow"
                unit="kr."
              />
              <FormComponent
                text={'Veitur inn kr.'}
                numberValue={formatNumber(veiturValue)}
                handleInputChange={(event) =>
                  setVeiturValue(removeFormatting(event.target.value))
                }
                color="yellow"
                unit="kr."
              />
              <FormComponent
                text={'Samtals kr.'}
                numberValue={formatNumber(samtalsValue)}
                handleInputChange={(event) =>
                  setVeiturValue(removeFormatting(event.target.value))
                }
                color="red"
                unit="kr."
              />
              <h2 className="font-semibold text-xl py-10 text-center">
                Sökkull miðað við tvöfalda járnabindingu
              </h2>

              <FormComponentThird
                text="Verð per rúmmeter af steypu"
                colors={[null, 'blue', null]}
                labels={['Magn', 'Ein.verð', 'Kostnaður']}
                numberValueUnitPrice={concreteVolumeValue}
                handleInputChangeUnitPrice={setConcreteVolumeValue}
                disableds={[true, false, true]}
                units={[null, 'kr.', null]}
              />
              <FormComponentThird
                text="Heildarlengd veggja að utanverðu í metrum (ummál húss)"
                numberValueUnit={wallsUnitValue}
                disableds={[true, false, false]}
                units={['m', null, null]}
              />
              <FormComponentThird
                text="Hæð sökkuls í metrum"
                numberValueUnit={sokkullHeightUnitValue}
                handleInputChangeUnit={setSokkullHeightUnitValue}
                colors={['yellow', null, null]}
                disableds={[false, false, false]}
                units={['m', null, null]}
              />
              <FormComponentThird
                text="Steypuþykkt í metrum"
                numberValueUnit={steyputhykktValue}
                handleInputChangeUnit={setSteyputhykktValue}
                colors={[null, null, null]}
                disableds={[true, false, false]}
                units={['m', null, null]}
              />
              <FormComponentThird
                text="Sökkull fermetrar"
                numberValueUnit={sokkullFermetrarUnit}
                numberValueUnitPrice={sokkullFermetrarPriceValue}
                numberValueCost={sokkullFermetrarCostValue}
                colors={[null, null, null]}
                disableds={[true, true, true]}
                units={['m²', 'kr.', 'kr.']}
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
