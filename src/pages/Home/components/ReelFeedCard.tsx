import Card from '../../../components/Card/Card'
import Container from '../../../components/Container/Container'
import Title from '../../../components/Typography/Title'
import Text from '../../../components/Typography/Text'
import Button from '../../../components/Buttons'
import { useEffect, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { classNames } from '../../../libs/classNameUtils'
import useAuthContext from '../../../modules/Auth/useAuthContext'
import useServiceProvider from '../../../context/useServiceProvider'

const ReelFeedCard = () => {
  const { user } = useAuthContext()
  const {
    fetchDogBreeds,
    fetchFavorites,
    saveFavouriteBreed,
  } = useServiceProvider()

  const [breeds, setBreeds] = useState([])
  const [selectedBreeds, setSelectedBreeds] = useState<Array<string>>([])
  const [favouritesBreeds, setFavouritesBreeds] = useState<Array<string>>([])

  useEffect(() => {
    getDogBreeds()
    getDogFavorites()
  }, [])

  const getDogBreeds = async () => {
    const response = await fetchDogBreeds()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setBreeds(response as any)
  }

  const getDogFavorites = async () => {
    if (!user) {
      return
    }

    if (user.email) {
      const response = await fetchFavorites(user.email)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setFavouritesBreeds(response as any)
    }
  }

  const handleAddBreeds = (breed: string) => {
    const filteredRecord = [...selectedBreeds].find((item) => item === breed)

    if (filteredRecord) {
      return
    }

    setSelectedBreeds([...selectedBreeds, breed])
  }

  const onSaveBreed = async () => {
    if (!user) {
      return
    }
    if (user.email) {
      await saveFavouriteBreed(user?.email, selectedBreeds)
    }
  }

  return (
    <Card className="p-10 mt-10 basis-3/4">
      <Container className="flex justify-between mb-4">
        <Title className="text-2xl">Discover All Amazing Dog Breeds Here</Title>
      </Container>

      <Container className="flex flex-wrap space-x-4 w-full mt-10 items-center">
        {Object?.keys(breeds)
          ?.slice(0, 7)
          ?.map((breed, index) => (
            <Container key={index} className="mb-5">
              <Button
                className={classNames(
                  favouritesBreeds.includes(breed) && '!bg-primary-200',
                  'w-full flex',
                )}
                mode="outline"
                onClick={() => handleAddBreeds(breed)}
              >
                <Text>{breed}</Text>
                <PlusCircleIcon className="w-5 h-5 my-auto ml-3" />
              </Button>
            </Container>
          ))}
      </Container>
      <Button className="w-full mt-10" onClick={onSaveBreed}>
        Save To Favourites
      </Button>
    </Card>
  )
}

export default ReelFeedCard
