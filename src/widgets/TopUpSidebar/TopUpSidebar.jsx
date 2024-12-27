import { memo } from "react"
import { TopUpCard } from "../TopUpCard"
import { AsideWrapper } from "../AsideWrapper"
import propTypes from 'prop-types'

function TopUpSidebar({ setSum }) {
  return (
    <AsideWrapper key={'shop-sidebar-wrapper'}>
      <TopUpCard setSum={setSum} />
    </AsideWrapper>
  )
}

TopUpSidebar.propTypes = {
  setSum: propTypes.func,
}

export default memo(TopUpSidebar)