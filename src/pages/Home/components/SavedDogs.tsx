import Card from '../../../components/Card/Card'
import Container from '../../../components/Container/Container'
import Title from '../../../components/Typography/Title'
import Button from '../../../components/Buttons'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useAuthContext from '../../../modules/Auth/useAuthContext'
import Text from '../../../components/Typography/Text'
import useServiceProvider from '../../../context/useServiceProvider'

const SavedDogs = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const [searchParams] = useSearchParams()
  const { fetchFavorites } = useServiceProvider()

  const [favouritesBreeds, setFavouritesBreeds] = useState<Array<string>>([])

  useEffect(() => {
    getDogFavorites()
  }, [user])

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

  const onViewFeed = (favourites: string) => {
    searchParams.set('breed', favourites)
    navigate({ pathname: '/feeds', search: searchParams.toString() })
  }

  return (
    <Card className="p-10 mt-10 basis-1/2">
      <Container className="flex justify-between mb-4">
        <Title className="text-2xl">My Favourite Breeds</Title>
      </Container>

      {favouritesBreeds?.map((favourites, index) => (
        <Container className="flex justify-between mb-5 items-center">
          <Text key={index} className="uppercase">
            {index + 1}. {favourites}
          </Text>
          <Button
            className="w-1/6 sm:w-2/6 !p-1"
            onClick={() => onViewFeed(favourites)}
          >
            View Feed
          </Button>
        </Container>
      ))}
    </Card>
  )
}

export default SavedDogs
