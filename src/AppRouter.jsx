import { Route, Routes } from 'react-router'
import { Suspense } from 'react'
import { routerConfig } from './shared/routerConfig'
import { AuthRequired } from './widgets/AuthRequired'

export default function AppRouter() {
  return (
    <Routes>
      {Object.keys(routerConfig).map((elem) => (
        <Route
          key={elem}
          path={elem}
          element={
            <Suspense>
              {routerConfig[elem].requireAuth ? (
                <AuthRequired>{routerConfig[elem].component}</AuthRequired>
              ) : (
                routerConfig[elem].component
              )}
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
