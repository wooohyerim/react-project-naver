import { FC } from 'react'

import Tbody from './Tbody'
import Thead from './Thead'

export type IData = {
  컬럼이름: string
  컬럼값: string
}

export type ITable = {
  columns: string[]
  data: IData[]
}

const Table: FC<ITable> = ({ columns, data }) => {
  return (
    <table className="striped">
      <Thead columns={columns} />
      <Tbody columns={columns} data={data} />
    </table>
  )
}

export default Table
