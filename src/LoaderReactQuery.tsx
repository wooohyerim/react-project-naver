import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
  useSearchParams
} from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { getPokeApi } from './api/pokeApi.ts'

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async (args: LoaderFunctionArgs) => {
  const url = new URL(args.request.url)
  const page = Number(url.searchParams.get('page')) || 0

  return await getPokeApi(page)
}

const LoaderReactQuery = () => {
  const loaderData = useLoaderData()
  const [params] = useSearchParams()
  const page = Number(params.get('page')) || 0
  const { data, isLoading } = useQuery({
    queryKey: ['pokeList', page],
    queryFn: () => getPokeApi(page),
    initialData: loaderData
  })

  const navigation = useNavigation()

  console.log(navigation.state)

  if (navigation.state === 'loading' || isLoading) {
    return <>loading...</>
  }

  return (
    <>
      {JSON.stringify(data)}
      <Link to={`/loader-react-query?page=${page + 1}`}>+</Link>
    </>
  )
}

export default LoaderReactQuery
