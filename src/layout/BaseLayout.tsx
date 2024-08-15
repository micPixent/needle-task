import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container/Container'
import Button from '../components/Buttons'
import Text from '../components/Typography/Text'
import { classNames } from '../libs/classNameUtils'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

interface BaseLayoutProps {
  className?: string
  enableBackButton?: boolean
  children: ReactNode
}

const BaseLayout = ({
  children,
  className,
  enableBackButton = true,
}: BaseLayoutProps) => {
  const navigate = useNavigate()
  return (
    <div className={classNames('w-full mt-4 mx-8', className)}>
      <Container>
        {enableBackButton && (
          <Container className="mr-2">
            <Button mode="text" className="" onClick={() => navigate(-1)}>
              <Container className="flex flex-row items-center text-white space-x-2">
                <ChevronLeftIcon className="w-5 h-5 items-center" />
                <Text className="text-white text-2xl">Back</Text>
              </Container>
            </Button>
          </Container>
        )}
        {children}
      </Container>
    </div>
  )
}

export default BaseLayout
