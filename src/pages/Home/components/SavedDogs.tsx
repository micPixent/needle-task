import Card from '../../../components/Card/Card'
import Container from '../../../components/Container/Container'
import Title from '../../../components/Typography/Title'
import Button from '../../../components/Buttons'

const SavedDogs = () => {
  return (
    <Card className="p-10 mt-10 basis-1/2">
      <Container className="flex justify-between mb-4">
        <Title className="text-2xl">My Saved Doggos</Title>
        <Button className="w-fit">View Feed</Button>
      </Container>
    </Card>
  )
}

export default SavedDogs
