import { Link, useLocation } from 'react-router-dom'
import { documentPages, documentTitles, noNavPages } from '../../shared/routerConfig'
import { memo } from 'react'

export default memo(function Footer() {
  const { pathname } = useLocation()

  if (noNavPages.find((elem) => pathname.includes(elem))) return null
  return (
    <footer className="flex justify-between items-center h-16 text-secondary gap-4 mt-auto max-w-4xl mx-auto w-full">
      {documentPages.map((elem, index) => (
        <Link key={index} to={elem} className="text-sm font-semibold">
          {documentTitles[index]}
        </Link>
      ))}
    </footer>
  )
})
