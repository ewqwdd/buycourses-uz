import { useEffect } from 'react'
import PropTypes from 'prop-types'

export default function Title({ title }) {
  useEffect(() => {
    if (!title) return
    document.title = title
    return () => {
      document.title = 'BuyCourses'
    }
  }, [title])
  return null
}

Title.defaultProps = {
  title: 'BuyCourses',
}

Title.propTypes = {
  title: PropTypes.string,
}
