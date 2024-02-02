import { NumericFormat } from 'react-number-format'
import styles from './formClasses.module.css'
import cx from 'classnames'
import { useState } from 'react'
import { parseLocaleNumber } from '../utils/formatters'

const FormComponentThird = ({
  text,
  labels,
  numberValueUnit,
  numberValueUnitPrice,
  numberValueCost,
  handleInputChangeUnit,
  handleInputChangeUnitPrice,
  colors,
  units,
  disableds,
}: {
  text?: string
  labels?: string[]
  numberValueUnit?: number
  numberValueUnitPrice?: number
  numberValueCost?: number
  handleInputChangeUnit?: React.Dispatch<React.SetStateAction<number>>
  handleInputChangeUnitPrice?: React.Dispatch<React.SetStateAction<number>>
  colors?: ('yellow' | 'blue' | 'red' | null)[]
  placeholder?: string
  units?: (string | null)[]
  disableds?: boolean[]
  shows?: boolean[]
}) => {
  return (
    <div className="wrapper flex flex-row gap-6 pb-2 flex-1">
      <div className={`field flex-1 !w-1/3 ${!labels && 'items-end flex'}`}>
        <p
          className={`flex items-end align-baseline ${
            labels ? 'pt-[36px]' : 'm-auto'
          } flex-1 justify-end`}
        >
          {text ? text : ''}
        </p>
      </div>
      <div className={`field flex-1 !w-1/3`}>
        {labels && <label className={`label`}>{labels[0]}</label>}
        <div className="control flex items-center gap-3">
          {numberValueUnit !== undefined && numberValueUnit !== null && (
            <>
              <NumericFormat
                className={cx('input text-right', {
                  '!pr-8': units && units[0],
                  [styles.red]: colors && colors[0] === 'red',
                })}
                decimalSeparator=","
                thousandSeparator="."
                disabled={disableds && disableds[0]}
                // value={!isFocused ? numberValueUnit : null}
                step={0.01}
                value={numberValueUnit}
                onBlur={(event) => {
                  console.log('value: ', event.currentTarget.value)

                  handleInputChangeUnit &&
                    handleInputChangeUnit(
                      parseLocaleNumber(event.currentTarget.value)
                    )
                }}
                // onFocus={() => setIsFocused(true)}
                // onBlur={() => setIsFocused(false)}
              />
              {/* <input
                className={cx('input text-right', {
                  '!pr-8': units && units[0],
                  [styles.yellow]: colors && colors[0] === 'yellow',
                  [styles.blue]: colors && colors[0] === 'blue',
                  [styles.red]: colors && colors[0] === 'red',
                })}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*\[\.\,]?[0-9]*"
                disabled={
                  (colors && colors[0] === 'red') || (disableds && disableds[0])
                }
                value={numberValueUnit}
                step={0.01}
                onChange={(event) => {
                  console.log(event.target.value)

                  handleInputChangeUnit &&
                    handleInputChangeUnit(event.currentTarget.valueAsNumber)
                }}
              /> */}
              {units && units[0] && (
                <span className={'-ml-10 z-10'}>{units[0]}</span>
              )}
            </>
          )}
        </div>
      </div>
      <div className={`field flex-1 !w-1/3`}>
        {labels && <label className={`label`}>{labels[1]}</label>}
        <div className="control flex items-center gap-3">
          {numberValueUnitPrice !== undefined &&
            numberValueUnitPrice !== null && (
              <>
                <NumericFormat
                  className={cx('input text-right', {
                    '!pr-8': units && units[1],
                    [styles.yellow]: colors && colors[1] === 'yellow',
                    [styles.blue]: colors && colors[1] === 'blue',
                    [styles.red]: colors && colors[1] === 'red',
                  })}
                  decimalSeparator=","
                  thousandSeparator="."
                  disabled={disableds && disableds[1]}
                  value={numberValueUnitPrice}
                  placeholder={numberValueUnitPrice.toString()}
                  onBlur={(event) => {
                    console.log('value: ', event.currentTarget.value)

                    handleInputChangeUnitPrice &&
                      handleInputChangeUnitPrice(
                        parseLocaleNumber(event.currentTarget.value)
                      )
                  }}
                />
                {/* <input
                className={cx('input text-right', {
                  '!pr-8': units && units[1],
                  [styles.yellow]: colors && colors[1] === 'yellow',
                  [styles.blue]: colors && colors[1] === 'blue',
                  [styles.red]: colors && colors[1] === 'red',
                })}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                disabled={
                  (colors && colors[1] === 'red') || (disableds && disableds[1])
                }
                placeholder={placeholder}
                value={numberValueUnitPrice}
                onChange={handleInputChangeUnitPrice}
              /> */}
                {units && units[1] && (
                  <span className={'-ml-10 z-10'}>{units[1]}</span>
                )}
              </>
            )}
        </div>
      </div>
      <div className={`field flex-1 !w-1/3`}>
        {labels && <label className={`label`}>{labels[2]}</label>}
        <div className="control flex items-center gap-3">
          {numberValueCost !== undefined && numberValueCost !== null && (
            <NumericFormat
              className={cx('input text-right', {
                '!pr-8': !!units && units[2],
                [styles.red]: colors && colors[2] === 'red',
              })}
              decimalSeparator=","
              thousandSeparator="."
              disabled={disableds && disableds[2]}
              value={numberValueCost}
            />

            // <input
            //   className={cx('input text-right', {
            //     '!pr-8': units && units[2],
            //     [styles.red]: colors && colors[2] === 'red',
            //   })}
            //   type="text"
            //   inputMode="numeric"
            //   pattern="[0-9]*"
            //   disabled={disableds && disableds[2]}
            //   value={numberValueCost}
            //   placeholder={placeholder}
            // />
          )}
          {units && units[2] && (
            <span className={'-ml-10 z-10'}>{units[2]}</span>
          )}
        </div>
      </div>
    </div>
  )
}
export default FormComponentThird
