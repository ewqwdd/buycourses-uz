import { memo } from "react"
import { TopUpCard } from "../TopUpCard"
import { AsideWrapper } from "../AsideWrapper"


export default memo(function TopUpSidebar() {
  return (
    <AsideWrapper key={'shop-sidebar-wrapper'}>
      <TopUpCard />
    </AsideWrapper>
  )
})
