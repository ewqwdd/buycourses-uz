import { memo } from "react"
import { TopUpCard } from "../TopUpCard"
import { AsideWrapper } from "../AsideWrapper"
import PropTypes from "prop-types"

function TopUpSidebar({ onSubmit, onSubmitSecond, buttonTextSecond }) {
  return (
    <AsideWrapper key={'shop-sidebar-wrapper'}>
      <TopUpCard onSubmit={onSubmit} onSubmitSecond={onSubmitSecond} buttonTextSecond={buttonTextSecond} />
    </AsideWrapper>
  )
}

TopUpSidebar.propTypes = {
  onSubmit: PropTypes.func,
  onSubmitSecond: PropTypes.func,
  buttonTextSecond: PropTypes.string,
}

export default memo(TopUpSidebar)