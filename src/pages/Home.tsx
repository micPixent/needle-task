import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import Text from '../components/Typography/Text'
import Title from '../components/Typography/Title'

const Home = () => {
  return (
    <Container>
      <Container className="p-5">
        <Card className="p-10">
          <Title className="text-2xl">Welcome to Dog Show Reels</Title>
          <Text className="mt-5 text-xl">
            Enjoy our amazing dog photos that will make your day smile!
          </Text>
        </Card>
      </Container>
    </Container>
  )
}

export default Home
