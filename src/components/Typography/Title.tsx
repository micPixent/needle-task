import { PropsWithChildren } from 'react'
import Text, { TextProps } from './Text'
import { classNames } from '../../libs/classNameUtils'

type Props = PropsWithChildren<TextProps>
export default function Title({
  children,
  className = 'text-lg',
  ...rest
}: Props) {
  return (
    <Text className={classNames('font-semibold', className)} {...rest}>
      {children}
    </Text>
  )
}
