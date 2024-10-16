import { Link, useSearchParams } from 'react-router-dom'

import { useQuery, useQueryClient } from '@tanstack/react-query'

import { getPokeApi } from './api/pokeApi.ts'

const ReactQueryUsage = () => {
  const [params, setParams] = useSearchParams()
  const page = Number(params.get('page')) || 0

  const client = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pokeList', page],
    queryFn: () => getPokeApi(page)
  })

  return (
    <>
      <table className="striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          {data?.results.map((item, index) => {
            return (
              <tr key={item.name}>
                <th scope="row">{index}</th>
                <td>{item.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {page}
      <button
        onClick={() => {
          setParams({
            page: `${page + 1}`
          })
        }}
        onMouseEnter={async () => {
          await client.prefetchQuery({
            queryKey: ['pokeList', page + 1],
            queryFn: () => getPokeApi(page + 1)
          })
        }}
      >
        +
      </button>
      {/*<Link to={`/react-query-usage?page=${page - 1}`}>*/}
      <Link
        to={{
          pathname: '/react-query-usage',
          search: `page=${page - 1}`
        }}
      >
        <div
          style={{
            aspectRatio: '1/1',
            width: '3rem',
            height: '3rem',
            backgroundColor: 'pink',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onMouseEnter={async () => {
            await client.prefetchQuery({
              queryKey: ['pokeList', page - 1],
              queryFn: () => getPokeApi(page - 1)
            })
          }}
        >
          -
        </div>
      </Link>
    </>
  )
}

export default ReactQueryUsage
