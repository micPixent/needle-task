import { HTMLAttributes, PropsWithChildren } from 'react'
import { classNames } from '../../libs/classNameUtils'

type Props = PropsWithChildren<HTMLAttributes<HTMLSpanElement>> & {
  textColor?: string
}
export default function Text({
  children,
  className,
  textColor = 'black',
  ...rest
}: Props) {
  return (
    <span className={classNames('block', className, textColor)} {...rest}>
      {children}
    </span>
  )
}
export type { Props as TextProps }
