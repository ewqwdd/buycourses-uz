import { memo } from "react"
import { TopUpCard } from "../TopUpCard"


export default memo(function TopUpSidebar() {
  return (
    <aside className="flex flex-col w-full flex-1 max-w-[328px] sticky top-32 self-start" key={'shop-sidebar-wrapper'}>
      <TopUpCard />
    </aside>
  )
})
