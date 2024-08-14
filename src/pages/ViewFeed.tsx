import Text from '../components/Typography/Text'
import BaseLayout from '../layout/BaseLayout'

type ViewFeedProps = {
  breed?: string
}

const ViewFeed = ({ breed }: ViewFeedProps) => {
  return (
    <BaseLayout>
      View Feed <Text>{breed}</Text>
    </BaseLayout>
  )
}

export default ViewFeed
