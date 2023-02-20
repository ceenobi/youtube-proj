import React, { lazy } from 'react'
import useFetchData from '../hooks/useFetchData'
import Spinner from '../utils/Spinner'
const Videos = lazy(() => import('../components/Videos'))

export default function Feed({ selectedCategory }) {
  const { error, data } = useFetchData(
    `search?part=snippet&q=${selectedCategory}`
  )
  return (
    <>
      <div
        className='px-lg-2 mt-4 mt-lg-0'
        style={{ overflowY: '90vh', height: 'auto' }}
      >
        {error && <p className='text-white mt-4 fs-5'>{error.message}</p>}
        <h1 className='text-white mb-4 fs-4'>
          {' '}
          {selectedCategory}
          <span className='ms-2 text-danger'>videos</span>
        </h1>
        <React.Suspense fallback={<Spinner />}>
          <Videos videos={data} />
        </React.Suspense>
      </div>
    </>
  )
}
