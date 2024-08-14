import Card from '../../../components/Card/Card'
import Container from '../../../components/Container/Container'
import Title from '../../../components/Typography/Title'
import Button from '../../../components/Buttons'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useAuthContext from '../../../modules/Auth/useAuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../service/firebase'
import Text from '../../../components/Typography/Text'

const SavedDogs = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const [favouritesBreeds, setFavouritesBreeds] = useState<Array<string>>([])

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return // Do nothing if no user is authenticated

      try {
        // Reference to the user's document in Firestore
        const userDocRef = doc(db, 'users', user.email)
        const docSnap = await getDoc(userDocRef)

        if (docSnap.exists()) {
          setFavouritesBreeds(docSnap.data().favouriteBreeds || [])
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchFavorites()
  }, [user])

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
          <Button className="w-fit !p-1" onClick={() => navigate('/feeds')}>
            View Feed
          </Button>
        </Container>
      ))}
    </Card>
  )
}

export default SavedDogs
