import { Suspense } from 'react'
import { useSearchParams } from 'react-router-dom'

import { atom, useAtomValue } from 'jotai'
import { atomFamily } from 'jotai/utils'

import { getPokeApi } from './api/pokeApi'

const listAtomFamily = atomFamily((page: number) => {
  return atom(async () => {
    const root = await getPokeApi(page)

    return root.results
  })
})

const Table = () => {
  const [params] = useSearchParams()
  const page = Number(params.get('page')) || 0
  const list = useAtomValue(listAtomFamily(page))

  return (
    <table className="striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={item.name}>
              <th scope="row">{index}</th>
              <td>{item.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const JotaiWithRRD = () => {
  const [params, setParams] = useSearchParams()

  const page = Number(params.get('page')) || 0

  return (
    <>
      <section id="tables">
        <h2>Poke API</h2>
        <div className="overflow-auto">
          <Suspense fallback="로딩중">
            <Table />
          </Suspense>
        </div>
      </section>
      <button
        type="button"
        onClick={() => {
          setParams({
            page: `${page - 1}`
          })
        }}
      >
        -
      </button>
      <span>{page}</span>
      <button
        type="button"
        onClick={() => {
          setParams({ page: `${page + 1}` })
        }}
      >
        +
      </button>
    </>
  )
}

export default JotaiWithRRD
