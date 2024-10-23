import Tbody from './Tbody'
import Thead from './Thead'

export type ITable<T extends object> = {
  columns: string[]
  data: T[]
}

const Table = <T extends object>({ columns, data }: ITable<T>) => {
  return (
    <table className="striped">
      <Thead columns={columns} />
      <Tbody columns={columns} data={data} />
    </table>
  )
}

export default Table
