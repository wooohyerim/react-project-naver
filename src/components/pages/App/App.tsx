import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

import { getPokeApi } from '../../../api/pokeApi'

import 'react-datepicker/dist/react-datepicker.css'

import Button from '../../atoms/Button/Button'
import Table, { IData } from '../../atoms/Table/Table'

function App() {
  const [page, setPage] = useState(0)
  const [list, setList] = useState<IData[]>([])

  useEffect(() => {
    getPokeApi(page).then((res) => {
      const data: IData[] = res.results.map((item, index) => {
        return {
          컬럼이름: `${index}`,
          컬럼값: item.name
        }
      })
      setList(data)
    })
  }, [page])

  const snapshot = (
    <>
      <DatePicker />
      <section id="tables">
        <h2>Poke API</h2>
        <div className="overflow-auto">
          <Table columns={['#', 'Heading']} data={list} />
        </div>
      </section>
      <Button
        type="button"
        onClick={() => {
          setPage(page - 1)
        }}
      >
        -
      </Button>
      <span>{page}</span>
      <Button
        type="button"
        onClick={() => {
          setPage(page + 1)
        }}
      >
        +
      </Button>
    </>
  )

  console.log(snapshot)

  return snapshot
}

export default App
