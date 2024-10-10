import { useEffect, useState } from 'react'

import { getPokeApi, Result } from './api/pokeApi'

function App() {
  const [page, setPage] = useState(0)
  const [list, setList] = useState<Result[]>([])

  useEffect(() => {
    getPokeApi(page).then((res) => {
      setList(res.results)
    })
  }, [page])

  const snapshot = (
    <>
      <section id="tables">
        <h2>Poke API</h2>
        <div className="overflow-auto">
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

  console.log(snapshot)

  return snapshot
}

export default App
