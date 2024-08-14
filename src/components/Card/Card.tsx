import { PropsWithChildren } from 'react'
import Container, { ContainerProps } from '../Container/Container'
import { classNames } from '../../libs/classNameUtils'

type Props = PropsWithChildren<ContainerProps>
export default function Card({ children, className, ...rest }: Props) {
  return (
    <Container
      className={classNames(
        'rounded-2xl bg-white shadow-lg overflow-hidden',
        className,
      )}
      {...rest}
    >
      {children}
    </Container>
  )
}
