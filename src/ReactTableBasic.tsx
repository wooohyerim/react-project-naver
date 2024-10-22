import { useState } from 'react'

import { faker } from '@faker-js/faker'
import { useQuery } from '@tanstack/react-query'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  Header,
  PaginationState,
  useReactTable
} from '@tanstack/react-table'
import dayjs from 'dayjs'

type Record = {
  type: 'GENERAL' | 'SYSTEM'
  title: string
  date: number
}

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const fakeAPI = async () => {
  await sleep(150)
  const data: Record[] = Array.from({ length: 10 }).map(() => {
    return {
      type: faker.helpers.arrayElement(['GENERAL', 'SYSTEM']),
      title: faker.food.meat(),
      date: faker.date.recent().getTime()
    }
  })

  return data
}

const columnHelper = createColumnHelper<Record>()

const columns = [
  columnHelper.accessor('type', {
    cell: ({ row }) => {
      if (row.original.type === 'GENERAL') {
        return '일반'
      }

      return '시스템'
    },
    footer: '타입의 푸터'
  }),
  columnHelper.accessor('title', {
    footer: () => <b>제목의 footer</b>
  }),
  columnHelper.accessor('date', {
    cell: (props) => {
      return dayjs(props.getValue()).format('YYYY.MM.DD')
    }
  })
]

const renderFooter = (
  header: Header<Record, unknown>,
  isPlaceholder: boolean
) => {
  if (isPlaceholder) {
    return null
  }

  return flexRender(header.column.columnDef.footer, header.getContext())
}

const ReactTableBasic = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })

  const { data = [] } = useQuery({
    queryKey: ['list', pagination.pageIndex],
    queryFn: () => fakeAPI()
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    //pagenation
    rowCount: 100, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination
    },
    onPaginationChange: setPagination,
    manualPagination: true
  })

  return (
    <>
      {' '}
      <table>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {renderFooter(header, header.isPlaceholder)}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <button
        className="border rounded p-1"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {'<'}
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {'>'}
      </button>
    </>
  )
}

export default ReactTableBasic
