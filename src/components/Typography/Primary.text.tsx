import { PropsWithChildren } from 'react'
import Text, { TextProps } from './Text'
import { classNames } from '../../libs/classNameUtils'

type Props = PropsWithChildren<TextProps>
export default function PrimaryText({
  children,
  className,
  textColor = 'text-primary-500',
  ...rest
}: Props) {
  return (
    <Text className={classNames(className)} textColor={textColor} {...rest}>
      {children}
    </Text>
  )
}

export type { Props as PrimaryTextProps }
