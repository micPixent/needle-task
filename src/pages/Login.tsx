import { useState } from 'react'
import Button from '../components/Buttons'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import PasswordTextInput from '../components/Forms/PasswordTextInput'
import TextInput from '../components/Forms/TextInput'
import Title from '../components/Typography/Title'
import BaseLayout from '../layout/BaseLayout'
import { isValidEmail } from '../libs/validate'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../service/firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async () => {
    if (!email) {
      return
    }
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnChangeEmail = (email: string) => {
    if (isValidEmail(email)) {
      setEmail(email)
    }
  }

  return (
    <BaseLayout>
      <Container className="flex justify-center">
        <Card className="p-12 w-3/6">
          <Title className="text-center text-2xl">Welcome Back</Title>
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
    </BaseLayout>
  )
}

export default Login
