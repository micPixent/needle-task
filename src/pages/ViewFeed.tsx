import { useNavigate, useSearchParams } from 'react-router-dom'
import Text from '../components/Typography/Text'
import BaseLayout from '../layout/BaseLayout'
import Title from '../components/Typography/Title'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import Button from '../components/Buttons'
import Image from '../components/Image/Image'
import { HeartIcon } from '@heroicons/react/16/solid'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const ViewFeed = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const breedType = searchParams.get('breed')

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    let isFetched = false

    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        if (!isFetched) {
          setImageUrl(data.message)
        }
      } catch (error) {
        if (!isFetched) {
          console.log(
            error,
            'Error fetching the image. Please try again later.',
          )
        }
      }
    }

    fetchDogImage()

    return () => {
      isFetched = true
    }
  }, [])

  return (
    <BaseLayout>
      <Container className="flex justify-center">
        <Card className="p-12 w-3/6 ">
          <Title className="text-center text-2xl">Your Favourite Breed</Title>
          <Text className="text-center text-xl mt-5">
            {breedType?.toLocaleUpperCase()} Breed
          </Text>

          <Container className="my-5 space-x-3">
            <Image src={imageUrl} className="rounded-xl mx-auto" />
            <div className="mx-auto space-x-5 mt-5 flex justify-around">
              <Button className="!w-1/6 flex" onClick={() => navigate(-1)}>
                <ChevronLeftIcon className="w-5 h-5 my-auto ml-3" />
                <Text>Back</Text>
              </Button>
              <Button className="!w-1/6 flex justify-center" mode="outline">
                <Text>Like</Text>
                <HeartIcon className="w-5 h-5 my-auto " />
              </Button>
            </div>
          </Container>
        </Card>
      </Container>
    </BaseLayout>
  )
}

export default ViewFeed
