/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate, useSearchParams } from 'react-router-dom'
import Text from '../components/Typography/Text'
import BaseLayout from '../layout/BaseLayout'
import Title from '../components/Typography/Title'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import Button from '../components/Buttons'
import Image from '../components/Image/Image'
import { HeartIcon } from '@heroicons/react/16/solid'
import { CheckBadgeIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import useAuthContext from '../modules/Auth/useAuthContext'
import useServiceProvider from '../context/useServiceProvider'
import Modal from '../components/Modal/Modal'
import { useOpenClose } from '../hooks/useOpenClose'
import { classNames } from '../libs/classNameUtils'

const ViewFeed = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const { fetchRandomDogImage, saveOnLikedDogBreed } = useServiceProvider()
  const successOnLikeDogBreeddModal = useOpenClose()

  const [searchParams] = useSearchParams()
  const breedType = searchParams.get('breed')

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    getDogImage()
  }, [])

  const getDogImage = async () => {
    const response = await fetchRandomDogImage()
    setImageUrl(response as any)
  }

  const onLikeDogBreed = async () => {
    // @ts-ignore
    const response = await saveOnLikedDogBreed(user?.email, breedType)
    // @ts-ignore
    if (response.message) {
      successOnLikeDogBreeddModal.open()
    }
  }

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
                <ChevronLeftIcon className="w-8 h-8 my-auto !text-black " />
                <Text>Back</Text>
              </Button>
              <Button
                className={classNames('!w-1/6 flex justify-center')}
                mode="outline"
                onClick={onLikeDogBreed}
              >
                <Text>Like</Text>
                <HeartIcon className="w-5 h-5 my-auto " />
              </Button>
            </div>
          </Container>
        </Card>
        <Modal
          show={successOnLikeDogBreeddModal.isOpen}
          onClose={successOnLikeDogBreeddModal.close}
        >
          <CheckBadgeIcon className="w-32 h-32 mx-auto text-green-500 my-4" />
          <Title className="text-center text-2xl">You liked this!</Title>

          <Button className="mt-10" onClick={successOnLikeDogBreeddModal.close}>
            Close
          </Button>
        </Modal>
      </Container>
    </BaseLayout>
  )
}

export default ViewFeed
