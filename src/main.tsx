import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import JotaiOnly from './JotaiOnly'

import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  NavLink,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom'

const NavOutlet = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="classic">useState 페이징</NavLink>
        </li>
        <li>
          <NavLink to="jotai-only">jotai 페이징</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavOutlet />}>
      <Route path="/classic" element={<App />} />
      <Route path="/jotai-only" element={<JotaiOnly />} />
      <Route path="*" element={<Navigate to="/classic" />} />
      {/* 트랩 */}
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
