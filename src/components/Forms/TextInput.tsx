import { InputHTMLAttributes, ReactNode } from 'react'
import TextInputConfig from './textInput.config'
import { classNames } from '../../libs/classNameUtils'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  mode?: 'default' | 'border-bottom'
  withValidation?: boolean
  subtitle?: string | ReactNode
  subtitleClassName?: string
  error?: boolean
}
export default function TextInput({
  name,
  label,
  placeholder,
  type = 'text',
  mode = 'default',
  withValidation,
  id,
  className,
  required,
  disabled,
  subtitle,
  autoCapitalize,
  subtitleClassName,
  error,
  ...rest
}: Props) {
  if (mode === 'border-bottom') {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className={classNames(
              disabled ? '!text-grey-100' : '',
              'block text-sm font-medium leading-6 text-grey-800',
            )}
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        {subtitle && (
          <span className={classNames('text-xs text-black', subtitleClassName)}>
            {subtitle}
          </span>
        )}
        <div className="relative flex">
          <input
            id={id}
            type={type}
            name={name}
            className={classNames(
              TextInputConfig.TextInputMode[mode],
              className,
              disabled ? 'text-grey-100' : '',
            )}
            placeholder={placeholder}
            disabled={disabled}
            autoCapitalize={autoCapitalize}
            {...rest}
          />
          {withValidation && (
            <img src="/assets/icons/green-tick-icon.svg" alt="" />
          )}
          <div
            className={classNames(
              'absolute inset-x-0 bottom-0 border-t peer-focus:border-t-2',
              error
                ? 'border-red-500'
                : 'border-grey-200 peer-focus:border-indigo-600',
            )}
            aria-hidden="true"
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2 flex">
        <input
          type={type}
          name={name}
          id={id}
          className={classNames(TextInputConfig.TextInputMode[mode], className)}
          placeholder={placeholder}
          disabled={disabled}
          autoCapitalize={autoCapitalize}
          {...rest}
        />
        {withValidation && <CheckCircleIcon className="w-3 h-3" />}
      </div>
    </div>
  )
}

export type { Props as TextInputProps }
