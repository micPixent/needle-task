import { getDoc, setDoc, doc } from 'firebase/firestore'
import { createContext, PropsWithChildren } from 'react'
import { db } from '../service/firebase'

interface IServiceContext {
  fetchDogBreeds: () => void
  fetchFavorites: (userEmail: string) => void
  saveFavouriteBreed: (
    userEmail: string,
    favouriteBreeds: Array<string>,
  ) => void
}

export const ServiceContext = createContext<IServiceContext | null>(null)

type Props = PropsWithChildren
const ServiceProvider = ({ children }: Props) => {
  const fetchDogBreeds = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      return data.message
    } catch (error) {
      console.log(error)
    }
  }

  const fetchFavorites = async (userEmail: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const userDocRef = doc(db, 'users', userEmail)
      const docSnap = await getDoc(userDocRef)

      if (docSnap.exists()) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return docSnap.data().favouriteBreeds || []
      } else {
        console.log('No such document!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const saveFavouriteBreed = async (
    userEmail: string,
    favouriteBreeds: Array<string>,
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const userDocRef = doc(db, 'users', userEmail)

      const data = {
        userEmail: userEmail,
        favouriteBreeds: favouriteBreeds,
      }

      await setDoc(userDocRef, data)
      console.log('Data saved successfully')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ServiceContext.Provider
      value={{ fetchDogBreeds, fetchFavorites, saveFavouriteBreed }}
    >
      {children}
    </ServiceContext.Provider>
  )
}

export default ServiceProvider
