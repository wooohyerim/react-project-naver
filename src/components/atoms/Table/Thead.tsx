import { FC } from 'react'

type IThead = {
  columns: string[]
}

const Thead: FC<IThead> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          return (
            <th scope="col" key={index}>
              {column}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default Thead
