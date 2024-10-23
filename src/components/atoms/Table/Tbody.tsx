import { ITable } from './Table'

const Tbody = <T extends object>({ data, columns }: ITable<T>) => {
  if (data.length <= 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length}>데이터가 없어요</td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody>
      {data.map((record) => {
        return (
          <tr>
            {Object.values(record).map((item, index) => {
              return <td key={index}>{item}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default Tbody
