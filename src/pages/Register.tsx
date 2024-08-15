import { useState } from 'react'
import Button from '../components/Buttons'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import PasswordTextInput from '../components/Forms/PasswordTextInput'
import TextInput from '../components/Forms/TextInput'
import Title from '../components/Typography/Title'
import BaseLayout from '../layout/BaseLayout'
import { isValidEmail } from '../libs/validate'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../service/firebase'
import Modal from '../components/Modal/Modal'
import { useOpenClose } from '../hooks/useOpenClose'
import {
  ExclamationCircleIcon,
  CheckBadgeIcon,
} from '@heroicons/react/16/solid'
import Text from '../components/Typography/Text'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'

const Register = () => {
  const successRegisterModal = useOpenClose()
  const errorRegisterModal = useOpenClose()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async () => {
    if (!email) {
      return
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password)

      const userDocRef = doc(db, 'users', email)
      const data = {
        userEmail: email,
        favouriteBreeds: [],
      }

      await setDoc(userDocRef, data)
      successRegisterModal.open()
    } catch {
      errorRegisterModal.open()
    }
  }

  const handleOnChangeEmail = (email: string) => {
    if (isValidEmail(email)) {
      setEmail(email)
    }
  }

  const handleOnSuccessRegister = () => {
    successRegisterModal.close()
    navigate('/')
  }

  return (
    <BaseLayout>
      <Container className="flex justify-center">
        <Card className="p-12 w-3/6">
          <Title className="text-center text-2xl">Create Your Account</Title>
          <div className="my-5">
            <Container className="space-y-5">
              <TextInput
                label="Email Address"
                mode="default"
                name="email"
                onChange={(e) => handleOnChangeEmail(e.target.value)}
              ></TextInput>
              <PasswordTextInput
                label="Password"
                mode="default"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></PasswordTextInput>
              <Button onClick={onSubmit}>Continue</Button>
            </Container>
          </div>
        </Card>
      </Container>
      <Modal
        show={successRegisterModal.isOpen}
        onClose={successRegisterModal.close}
      >
        <CheckBadgeIcon className="w-32 h-32 mx-auto text-green-500 my-4" />
        <Title className="text-center text-2xl">
          Your account is successfully created
        </Title>

        <Button className="mt-10" onClick={handleOnSuccessRegister}>
          Back To Home
        </Button>
      </Modal>
      <Modal
        show={errorRegisterModal.isOpen}
        onClose={errorRegisterModal.close}
      >
        <ExclamationCircleIcon className="w-32 h-32 mx-auto text-red-500 my-4" />
        <Title className="text-center text-2xl">Register Failed</Title>
        <Text className="text-center mt-5 font-semibold">
          Please Try Again!
        </Text>
        <Button className="mt-10" onClick={errorRegisterModal.close}>
          Close
        </Button>
      </Modal>
    </BaseLayout>
  )
}

export default Register
