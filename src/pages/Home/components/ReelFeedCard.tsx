import Card from '../../../components/Card/Card'
import Container from '../../../components/Container/Container'
import Title from '../../../components/Typography/Title'
import Text from '../../../components/Typography/Text'
import Button from '../../../components/Buttons'
// import Image from '../../../components/Image/Image'
import { useEffect, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { classNames } from '../../../libs/classNameUtils'

const ReelFeedCard = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setBreeds(data.message)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBreeds()
  }, [])

  return (
    <Card className="p-10 mt-10 basis-3/4">
      <Container className="flex justify-between mb-4">
        <Title className="text-2xl">Discover All Amazing Dog Breeds Here</Title>
        <Button className="w-fit">View More Feed</Button>
      </Container>

      <Container className="flex flex-wrap space-x-4 w-full mt-10 items-center">
        {Object?.keys(breeds)
          ?.slice(0, 7)
          ?.map((breed, index) => (
            <Container key={index} className="mb-5">
              <Button className={classNames('w-full flex')} mode="outline">
                <Text>{breed}</Text>
                <PlusCircleIcon className="w-5 h-5 my-auto ml-3" />
              </Button>
            </Container>
          ))}
      </Container>
    </Card>
  )
}

export default ReelFeedCard
