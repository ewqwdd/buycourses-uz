import { useEffect } from 'react'
import PropTypes from 'prop-types'

export default function Title({ title }) {
  useEffect(() => {
    if (!title) return
    document.title = title
    return () => {
      document.title = `St. John's Hill Estate Pvt. Ltd.`
    }
  }, [title])
  return null
}

Title.defaultProps = {
  title: `St. John's Hill Estate Pvt. Ltd.`,
}

Title.propTypes = {
  title: PropTypes.string,
}
