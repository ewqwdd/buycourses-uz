import { typings } from '../../shared/lib/typings'
import useUserStore from '../../shared/store/useUserStore'
import { Card } from '../../shared/ui/Card'
import { ListWrapper } from '../../shared/ui/ListWrapper'
import { Title } from '../../shared/ui/Title'
import CartSidebar from '../../widgets/CartSidebar/CartSidebar'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { OfferSidebar } from '../../widgets/OffersSidebar'
import CartProduct from './CartProduct'

export default function Cart() {
  const products = useUserStore((state) => state.basket) ?? []

  let content
  const hasItems = products.length > 0

  if (!hasItems) {
    content = (
      <Card className="min-h-[482px] flex-1 justify-center items-center">
        <h2 className="text-base font-semibold text-teritary">{typings.noProducts}</h2>
      </Card>
    )
  } else {
    content = (
      <ListWrapper>
        {products.map((item) => (
          <CartProduct key={item.id} {...item} />
        ))}
      </ListWrapper>
    )
  }
  return (
    <Main>
      <Title title={typings.cart} />
      <DefaultHeader title={typings.cart} subTitle={products.length + ' ' + typings.products} />
      <div className="flex gap-20 mt-10">
        <CartSidebar />
        {content}
      </div>
    </Main>
  )
}
