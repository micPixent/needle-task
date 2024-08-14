import { ImgHTMLAttributes } from 'react'
import { classNames } from '../../libs/classNameUtils'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  bgSize?: 'bg-contain' | 'bg-cover' | 'bg-none' | 'bg-scale-down' | 'bg-fill'
  className?: string
  wrapperClassNames?: string
}
export default function Image({
  className = '',
  bgSize = 'bg-contain',
  wrapperClassNames = '',
  ...rest
}: Props) {
  return (
    <div
      className={classNames(
        bgSize,
        'bg-center bg-no-repeat w-full',
        wrapperClassNames,
      )}
    >
      <img className={classNames(className)} loading="lazy" {...rest} />
    </div>
  )
}
