import { ITable } from './Table'

const Tbody = ({ data, columns }: ITable) => {
  if (data.length <= 0) {
    return (
      <tbody>
        <tr>
          <td>데이터가 없습니다.</td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            {columns.map((_, index) => {
              return (
                <td scope="col" key={index}>
                  {item.컬럼값}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default Tbody
