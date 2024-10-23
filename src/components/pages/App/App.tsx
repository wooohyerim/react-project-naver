import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { getPokeApi } from '../../../api/pokeApi'
import Button from '../../atoms/Button/Button'
import Table from '../../atoms/Table/Table'

function App() {
  const [page, setPage] = useState(0)
  const [list, setList] = useState<{ '#': string; Heading: string }[]>([])

  useEffect(() => {
    getPokeApi(page).then((res) => {
      const data = res.results.map((item, index) => {
        return {
          '#': `${index + 1}`,
          Heading: item.name
        }
      })

      setList(data)
    })
  }, [page])

  return (
    <>
      <DatePicker />

      <section id="tables">
        <h2>PokeAPI</h2>
        <div className="overflow-auto">
          <Table columns={['#', 'Heading']} data={list} />
        </div>
      </section>
      <Button type="button" onClick={() => setPage(page - 1)}>
        -
      </Button>
      <span>1</span>
      <Button type="button" onClick={() => setPage(page + 1)}>
        +
      </Button>
    </>
  )
}

export default App
