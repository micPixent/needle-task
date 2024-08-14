import Card from '../../../components/Card/Card'
import Container from '../../../components/Container/Container'
import Title from '../../../components/Typography/Title'
import Text from '../../../components/Typography/Text'
import Button from '../../../components/Buttons'

const ReelFeedCard = () => {
  return (
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
  )
}

export default ReelFeedCard
