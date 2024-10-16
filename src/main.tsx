import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import AtomsInAtom from './AtomsInAtom.tsx'
import JotaiWithRRD from './JotailWithRRD.tsx'
import JotaiOnly from './JotaiOnly'
import ReactQueryUsage from './ReactQueryUsage.tsx'

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

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import LoaderReactQuery, { loader } from './LoaderReactQuery.tsx'

// eslint-disable-next-line react-refresh/only-export-components
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
        <li>
          <NavLink to="jotai-with-rrd">jotai + react-router-dom</NavLink>
        </li>
        <li>
          <NavLink to="atoms-in-atom">Atoms in atom</NavLink>
        </li>
        <li>
          <NavLink to="react-query-usage">react-query 사용법</NavLink>
        </li>{' '}
        <li>
          <NavLink to="loader-react-query">loader + react-query 사용법</NavLink>
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
      <Route path="/jotai-with-rrd" element={<JotaiWithRRD />} />
      <Route path="/atoms-in-atom" element={<AtomsInAtom />} />
      <Route path="/react-query-usage" element={<ReactQueryUsage />} />
      <Route
        path="/loader-react-query"
        loader={loader}
        element={<LoaderReactQuery />}
      />
      {/*
      트랩 
      인증 페이지에 주로 사용*/}
      <Route path="*" element={<Navigate to="/classic" />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
