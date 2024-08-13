import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { classNames } from '../libs/classNameUtils'

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    mode?: 'solid' | 'outline' | 'text'
    size?: 'sm' | 'md' | 'lg'
  }
>

export default function Button({
  children,
  mode = 'solid',
  type = 'button',
  size = 'md',
  className,
  disabled,
  ...rest
}: Props) {
  let sizeClass = 'px-2 py-1 text-sm'

  if (size === 'md') {
    sizeClass = 'px-3 py-2 text-base sm:text-lg'
  }

  if (size === 'lg') {
    sizeClass = 'px-4 py-3 text-lg sm:text-xl'
  }

  const disabledClassname = disabled
    ? 'opacity-40 cursor-not-allowed !bg-grey-200 !text-black'
    : ''

  if (mode === 'text') {
    return (
      <button
        type={type}
        className={classNames(
          'rounded-lg bg-transparent text-primary-500 inline',
          disabledClassname,
          className,
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    )
  }

  if (mode === 'outline') {
    return (
      <button
        type={type}
        className={classNames(
          'rounded-lg bg-white text-primary-500 shadow-sm ring-1 ring-inset ring-primary-500 w-full py-3 focus:bg-primary-100 focus:text-primary-800',
          sizeClass,
          disabledClassname,
          className,
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      type={type}
      className={classNames(
        'rounded-lg bg-primary-500 font-bold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 w-full py-3',
        sizeClass,
        disabledClassname,
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export type { Props as ButtonProps }
