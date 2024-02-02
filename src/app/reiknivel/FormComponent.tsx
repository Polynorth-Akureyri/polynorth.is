import styles from './formClasses.module.css'
import cx from 'classnames'

const FormComponent = ({
  text,
  label,
  numberValue,
  handleInputChange,
  color,
  placeholder,
  unit,
  disabled,
}: {
  text?: string
  label?: string
  numberValue: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  color: 'yellow' | 'blue' | 'red'
  placeholder?: string
  unit?: string
  disabled?: boolean
}) => {
  return (
    <div className="wrapper flex flex-row gap-6 pb-3">
      <p
        className={`flex items-end pb-2 flex-1 justify-end ${
          color === 'red' && 'font-bold'
        }`}
      >
        {text ? text : ''}
      </p>

      <div className={`field flex-1 w-1/2`}>
        {label && <label className={`label`}>{label}</label>}
        <div className="control flex items-center">
          <input
            className={cx('input text-right !w-1/2', {
              '!pr-8': unit,
              [styles.yellow]: color === 'yellow',
              [styles.blue]: color === 'blue',
              [styles.red]: color === 'red',
            })}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            disabled={color === 'red' || disabled}
            value={numberValue}
            placeholder={placeholder}
            onChange={handleInputChange}
          />
          <span className={`${unit ? '-ml-7' : ''} z-10`}>{unit}</span>
        </div>
      </div>
    </div>
  )
}
export default FormComponent
