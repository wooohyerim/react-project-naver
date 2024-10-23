import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AtomsInAtom from './AtomsInAtom.tsx'
import App from './components/pages/App/App.tsx'
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

import LoaderReactQuery, {
  loader as loader4ReactQuery
} from './LoaderReactQuery.tsx'
import ReactTableBasic from './ReactTableBasic.tsx'

// eslint-disable-next-line react-refresh/only-export-components
const NavOutlet = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="classic"
            style={(props) => {
              if (props.isActive) {
                return { textDecoration: 'underline' }
              }

              return {}
            }}
          >
            useState 페이징
          </NavLink>
        </li>
        <li>
          <NavLink
            to="jotai-only"
            style={(props) => {
              if (props.isActive) {
                return { textDecoration: 'underline' }
              }

              return {}
            }}
          >
            jotai 페이징
          </NavLink>
        </li>
        <li>
          <NavLink
            to="jotai-with-rrd"
            style={(props) => {
              if (props.isActive) {
                return { textDecoration: 'underline' }
              }

              return {}
            }}
          >
            jotai + react-router-dom
          </NavLink>
        </li>
        <li>
          <NavLink
            to="atoms-in-atom"
            style={(props) => {
              if (props.isActive) {
                return { textDecoration: 'underline' }
              }

              return {}
            }}
          >
            Atoms in atom
          </NavLink>
        </li>
        <li>
          <NavLink
            to="react-query-usage"
            style={(props) => {
              if (props.isActive) {
                return { textDecoration: 'underline' }
              }

              return {}
            }}
          >
            react-query 사용법
          </NavLink>
        </li>{' '}
        <li>
          <NavLink
            to="loader-react-query"
            style={(props) => {
              if (props.isActive) {
                return { textDecoration: 'underline' }
              }

              return {}
            }}
          >
            loader + react-query 사용법
          </NavLink>
        </li>
        <li>
          <NavLink
            to="react-table-basic"
            style={(props) => {
              if (props.isActive) {
                return { textDecoration: 'underline' }
              }

              return {}
            }}
          >
            react-table 사용법
          </NavLink>
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
      <Route path="/react-table-basic" element={<ReactTableBasic />} />
      <Route
        path="/loader-react-query"
        loader={loader4ReactQuery}
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
