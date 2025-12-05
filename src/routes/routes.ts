// 라우트 path 상수
export const ROUTE_PATHS = {
  HOME: '/',
  LOGIN: '/login',
  SETTINGS: '/settings',
} as const

export type RouteKey = keyof typeof ROUTE_PATHS
export type RoutePath = (typeof ROUTE_PATHS)[RouteKey]

// 사이드바/메뉴 등에 쓸 메타 정보
export interface AppRouteMeta {
  key: RouteKey,
  path: RoutePath,
  label: string,
  showInNav?: boolean,
}

export const APP_ROUTES: AppRouteMeta[] = [
  {
    key: 'HOME',
    path: ROUTE_PATHS.HOME,
    label: '홈',
    showInNav: true,
  },
  {
    key: 'LOGIN',
    path: ROUTE_PATHS.LOGIN,
    label: '로그인',
    showInNav: false,
  },
  {
    key: 'SETTINGS',
    path: ROUTE_PATHS.SETTINGS,
    label: '설정',
    showInNav: true,
  },
]
