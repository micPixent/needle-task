/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getDoc, setDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { createContext, PropsWithChildren } from 'react'
import { db } from '../service/firebase'

interface IServiceContext {
  fetchDogBreeds: () => void
  fetchFavorites: (userEmail: string) => void
  saveFavouriteBreed: (
    userEmail: string,
    favouriteBreeds: Array<string>,
  ) => void
  fetchIsLikedBreed: (userEmail: string) => void
  fetchRandomDogImage: () => void
  saveOnLikedDogBreed: (userEmail: string, breedType: string) => void
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
      // @ts-ignore
      const userDocRef = doc(db, 'users', userEmail)
      const docSnap = await getDoc(userDocRef)

      if (docSnap.exists()) {
        // @ts-ignore
        return docSnap.data().favouriteBreeds || []
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchIsLikedBreed = async (userEmail: string) => {
    try {
      // @ts-ignore
      const userDocRef = doc(db, 'users', userEmail)
      const docSnap = await getDoc(userDocRef)

      if (docSnap.exists()) {
        // @ts-ignore
        return docSnap.data().isLiked || []
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
      // @ts-ignore
      const userDocRef = doc(db, 'users', userEmail)

      const data = {
        userEmail: userEmail,
        favouriteBreeds: favouriteBreeds,
      }

      await setDoc(userDocRef, data)
      await updateDoc(userDocRef, data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      return data.message
    } catch (error) {
      console.log(error)
    }
  }

  const saveOnLikedDogBreed = async (userEmail: string, breedType: string) => {
    const userDocRef = doc(db, 'users', userEmail)

    try {
      await updateDoc(userDocRef, {
        isLiked: arrayUnion(breedType),
      })
      return { message: true }
    } catch (error) {
      console.error('Error updating document: ', error)
    }
  }

  return (
    <ServiceContext.Provider
      value={{
        fetchDogBreeds,
        fetchFavorites,
        saveFavouriteBreed,
        fetchIsLikedBreed,
        fetchRandomDogImage,
        saveOnLikedDogBreed,
      }}
    >
      {children}
    </ServiceContext.Provider>
  )
}

export default ServiceProvider
