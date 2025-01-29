import { memo } from "react"
import { TopUpCard } from "../TopUpCard"
import { AsideWrapper } from "../AsideWrapper"
import propTypes from 'prop-types'

function TopUpSidebar({ onSubmit }) {
  return (
    <AsideWrapper key={'shop-sidebar-wrapper'}>
      <TopUpCard onSubmit={onSubmit} />
    </AsideWrapper>
  )
}

TopUpSidebar.propTypes = {
  setSum: propTypes.func,
}

export default memo(TopUpSidebar)