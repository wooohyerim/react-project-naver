import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { atom, useAtomValue, useSetAtom } from 'jotai'

import { getPokeApi } from './api/pokeApi'

const createPageNumberAtom = (page: number) => {
  return atom(page)
}

const pageAtomAtom = atom(createPageNumberAtom(0))

const listAtom = atom(async (get) => {
  const pageAtom = get(pageAtomAtom)
  const page = get(pageAtom)

  const root = await getPokeApi(page)

  return root.results
})

const listCountAtom = atom(async (get) => {
  const list = await get(listAtom)

  return list.length
})

// const listAtomFamily = atomFamily((page: number) => {
//   return atom(async () => {
//     const root = await getPokeApi(page)

//     return root.results
//   })
// })

const Table = () => {
  const [params] = useSearchParams()
  const page = Number(params.get('page')) || 0
  const list = useAtomValue(listAtom)
  const count = useAtomValue(listCountAtom)

  const setPageAtomAtom = useSetAtom(pageAtomAtom)

  useEffect(() => {
    setPageAtomAtom(createPageNumberAtom(page))
  }, [page, setPageAtomAtom])

  return (
    <table className="striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading {count}</th>
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

const AtomsInAtom = () => {
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

export default AtomsInAtom
