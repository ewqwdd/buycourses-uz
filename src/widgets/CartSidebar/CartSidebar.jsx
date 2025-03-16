import { Link } from 'react-router-dom'
import { Button } from '../../shared/ui/Button'
import { AsideWrapper } from '../AsideWrapper'
import { typings } from '../../shared/lib/typings'
import { Card } from '../../shared/ui/Card'

export default function CartSidebar() {
  return (
    <AsideWrapper className="gap-4">
      <Card className="min-h-[202px] gap-1 px-8 justify-center items-center">
        <h2 className="text-base font-semibold text-primary text-center">{typings.addingCart}</h2>
        <p className="text-sm text-secondary font-medium text-center">{typings.addingCartDescription}</p>
      </Card>
      <Button variant="primary" as={Link} to="/">
        {typings.addingProduct}
      </Button>
    </AsideWrapper>
  )
}
