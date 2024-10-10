import { Suspense } from 'react'

import { atom, useAtom, useAtomValue } from 'jotai'

import { getPokeApi } from './api/pokeApi'

const pageAtom = atom(0)

const listAtom = atom(async (get) => {
  const page = get(pageAtom)
  const root = await getPokeApi(page)
  return root.results
})

const Table = () => {
  const list = useAtomValue(listAtom)
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

const JotaiOnly = () => {
  const [page, setPage] = useAtom(pageAtom)

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
          setPage(page - 1)
        }}
      >
        -
      </button>
      <span>{page}</span>
      <button
        type="button"
        onClick={() => {
          setPage(page + 1)
        }}
      >
        +
      </button>
    </>
  )
}

export default JotaiOnly
