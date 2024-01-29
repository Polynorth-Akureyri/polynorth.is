'use client'
import React, { useState } from 'react'
import { InputMask } from '@react-input/mask'
import { InputNumberFormat } from '@react-input/number-format'

import cx from 'classnames'
import styles from './formClasses.module.css'
import { formatNumber, removeFormatting } from '../utils/formatters'

const FormComponent = ({
  fermetrarValue,
  handleInputChange,
  color,
  placeholder,
}: {
  fermetrarValue: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  color: 'yellow' | 'blue'
  placeholder?: string
}) => {
  return (
    <div className="wrapper flex flex-row gap-6">
      <p className="flex items-end pb-2 flex-1 justify-end">
        Hvað á draumahúsið að vera margir fermetrar?
      </p>
      <div className="field flex-1">
        <label className="label">
          Fermetrar (m<sup>2</sup>)
        </label>
        <div className="control">
          <input
            className={cx('input text-right', {
              [styles.yellow]: color === 'yellow',
              [styles.blue]: color === 'blue',
            })}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={fermetrarValue}
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}

export default function Reiknivel() {
  const [fermetrarValue, setFermetrarValue] = useState('96')
  const [lodakaupValue, setLodakaupValue] = useState('30000000')

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
                fermetrarValue={formatNumber(fermetrarValue, 'm²')}
                handleInputChange={(event) =>
                  setFermetrarValue(removeFormatting(event.target.value))
                }
                color="yellow"
              />
              <h2 className="font-semibold text-xl py-10 text-center">
                Hérna uppfærir þú alla gula reiti með þínum tölum
              </h2>
              <FormComponent
                fermetrarValue={formatNumber(lodakaupValue, 'kr.')}
                handleInputChange={(event) =>
                  setLodakaupValue(removeFormatting(event.target.value))
                }
                color="yellow"
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
