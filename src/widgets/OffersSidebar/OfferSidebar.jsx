import { Link } from 'react-router-dom'
import { Button } from '../../shared/ui/Button'
import { CreationCard } from '../CreationCard'
import { AsideWrapper } from '../AsideWrapper'

export default function OfferSidebar() {
  return (
    <AsideWrapper className="gap-4">
      <CreationCard />
      <Button variant="primary" as={Link} to="/create">
        Создать объявление
      </Button>
    </AsideWrapper>
  )
}
