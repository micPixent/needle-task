import { classNames } from '../../libs/classNameUtils'
import Text, { TextProps } from './Text'

type Props = TextProps
export default function ErrorText({ className, ...rest }: Props) {
  return (
    <Text
      className={classNames('text-xs', className)}
      textColor="text-red-600"
      {...rest}
    />
  )
}
