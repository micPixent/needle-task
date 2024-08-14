import { useNavigate } from 'react-router-dom'
import Button from '../components/Buttons'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import Text from '../components/Typography/Text'
import Title from '../components/Typography/Title'
import useAuthContext from '../modules/Auth/useAuthContext'

const Home = () => {
  const { isAuthenticated, user, logout } = useAuthContext()
  const navigate = useNavigate()

  return (
    <Container>
      <Container className="p-5">
        <Card className="p-10">
          <Container className="flex justify-between mb-4">
            {isAuthenticated && (
              <Title className="text-2xl">Welcome Back {user?.email}</Title>
            )}
            {!isAuthenticated && (
              <>
                <Title className="text-2xl">Welcome to Dog Show Reels</Title>
                <Button className="w-32" onClick={() => navigate('/login')}>
                  Login Now
                </Button>
              </>
            )}
            {isAuthenticated && (
              <Button className="w-32" onClick={logout}>
                Logout
              </Button>
            )}
          </Container>
          <Container className="flex justify-between">
            <Text className="mt-5 text-xl">
              Enjoy our amazing dog photos that will make your day smile!
            </Text>
            {!isAuthenticated && (
              <Button className="w-32" onClick={() => navigate('/register')}>
                Register
              </Button>
            )}
          </Container>
        </Card>

        <Container className="flex space-x-10">
          <Card className="p-10 mt-10 basis-3/4">
            <Container className="flex justify-between mb-4">
              <Title className="text-2xl">Welcome to Dog Show Reels</Title>
              <Button className="w-32">View Feed</Button>
            </Container>
            Here have Image
            <Container className="flex justify-between">
              <Text className="mt-5 text-xl">
                Enjoy our amazing dog photos that will make your day smile!
              </Text>
            </Container>
          </Card>

          <Card className="p-10 mt-10 basis-1/4">
            <Container className="flex justify-between mb-4">
              <Title className="text-2xl">My Saved Doggos</Title>
            </Container>
          </Card>
        </Container>
      </Container>
    </Container>
  )
}

export default Home
