import { Link, useSearchParams } from 'react-router-dom'

const ReactQueryUsage = () => {
  const [params, setParams] = useSearchParams()
  const page = Number(params.get('page')) || 0

  return (
    <>
      {page}
      <button
        onClick={() => {
          setParams({
            page: `${page + 1}`
          })
        }}
      >
        +
      </button>
      {/*<Link to={`/react-query-usage?page=${page - 1}`}>*/}
      <Link
        to={{
          pathname: '/react-query-usage',
          search: `page=${page - 1}`
        }}
      >
        <div
          style={{
            aspectRatio: '1/1',
            width: '3rem',
            height: '3rem',
            backgroundColor: 'pink',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          -
        </div>
      </Link>
    </>
  )
}

export default ReactQueryUsage
