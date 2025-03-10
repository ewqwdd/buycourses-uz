import { Link } from 'react-router-dom'
import { Button } from '../../shared/ui/Button'
import { CreationCard } from '../CreationCard'
import { AsideWrapper } from '../AsideWrapper'
import { typings } from '../../shared/lib/typings'

export default function OfferSidebar() {
  return (
    <AsideWrapper className="gap-4">
      <CreationCard />
      <Button variant="primary" as={Link} to="/create">
        {typings.addingProduct}
      </Button>
    </AsideWrapper>
  )
}
