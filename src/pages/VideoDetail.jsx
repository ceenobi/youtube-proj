import React, { lazy } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import useFetchData from '../hooks/useFetchData'
import Spinner from '../utils/Spinner'
const Videos = lazy(() => import('../components/Videos'))

export default function VideoDetail() {
  const { id } = useParams()
  const { error, videoDetail } = useFetchData(
    `videos?part=snippet,statistics&id=${id}`
  )
  const { data } = useFetchData(
    `search?part=snippet&relatedToVideoId=${id}&type=video`
  )
  const { data: comments } = useFetchData(
    `commentThreads?part=snippet&videoId=${id}`
  )
  console.log(comments)

  if (!videoDetail?.snippet) return <Spinner />
  if (!comments?.snippet)
    return <p className='text-white'>Loading comments...</p>

  const {
    snippet: {
      topLevelComment: {
        snippet: { authorProfileImageUrl, authorDisplayName, textOriginal },
      },
    },
  } = comments

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail
  return (
    <div style={{ minHeight: '95vh' }}>
      <div className='mt-3 mt-lg-0'>
        {error && <p className='text-white mt-4 fs-5'>{error.message}</p>}
        <div>
          <div style={{ width: '100%', height: 'auto' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className='react-player img-fluid'
            />
          </div>
          <h1 className='fs-5 text-white p-2 mt-2'>{title}</h1>
          <div className='d-flex justify-content-between align-items-center py-1 px-2'>
            <Link to={`/channel/${channelId}`}>
              <p className='text-white'>{channelTitle}</p>
            </Link>
            <div className='d-flex align-items-center gap-3 text-white'>
              <p style={{ opacity: '0.7' }}>
                {parseInt(viewCount).toLocaleString()} views
              </p>
              <p style={{ opacity: '0.7' }}>
                {parseInt(likeCount).toLocaleString()} likes
              </p>
            </div>
          </div>
        </div>
        <div className='d-lg-flex px-2 py-5 py-md-1'>
          <div className='d-flex gap-2'>
            <Image />
          </div>
          <div>
            <h1 className='fs-5 text-white mt-3 mb-3'>Related videos</h1>
            <React.Suspense fallback={<Spinner />}>
              <Videos videos={data} />
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
