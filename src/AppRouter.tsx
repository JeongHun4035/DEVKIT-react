import { Navigate, Route, Routes } from 'react-router-dom'

// import MainLayout from '@/layouts/MainLayout'
// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Settings from '@/pages/Settings'
// import NotFound from '@/pages/NotFound'
import { ROUTE_PATHS } from '@/routes/routes'

const AppRouter = () => {
  return (
    <Routes>
      {/* 레이아웃 라우트 */}
      {/* <Route element={<MainLayout />}>
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
        <Route path={ROUTE_PATHS.SETTINGS} element={<Settings />} />
      </Route> */}

      {/* 예: /home -> / 리다이렉트 */}
      <Route path="/home" element={<Navigate to={ROUTE_PATHS.HOME} replace />} />

      {/* 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default AppRouter
