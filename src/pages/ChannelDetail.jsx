import React, { useRef } from 'react'
import { Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Videos } from '../components'
import useFetchData from '../hooks/useFetchData'
import { demoProfilePicture } from '../utils/constants'

const scrollView = {
  overflowX: 'scroll',
  overflowY: 'hidden',
}

export default function ChannelDetail() {
  const scrollRef = useRef()
  const { id } = useParams()
  const { statusCode, error, channelDetail } = useFetchData(
    `channels?part=snippet&id=${id}`
  )
  const { data: videos } = useFetchData(
    `search?channelId=${id}&part=snippet&order=date`
  )

  const scroll = (direction) => {
    const { current } = scrollRef
    direction === 'left'
      ? (current.scrollLeft -= 800)
      : (current.scrollLeft += 800)
  }

  return (
    <>
      <div style={{ minHeight: '95vh' }}>
        {/* {statusCode !== 200 && (
          <p className='text-white mt-4 fs-5'>Sorry, we could not fetch data</p>
        )} */}
        {error ? (
          <p className='text-white mt-4 fs-5'>
            There was error fetching the data. Please try again.
          </p>
        ) : (
          <>
            <div
              className='d-flex justify-content-start align-items-center mt-5 mt-md-0 gap-2 channelIdBg'
              style={{ height: '300px' }}
            >
              <Image
                src={
                  channelDetail?.snippet?.thumbnails?.high?.url ||
                  demoProfilePicture
                }
                alt={channelDetail?.snippet?.title}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div>
                <h1 className='text-md-center text-white'>
                  {channelDetail?.snippet?.title}
                </h1>
                {channelDetail?.statistics?.subscriberCount && (
                  <p className='text-white'>
                    {' '}
                    {parseInt(
                      channelDetail?.statistics?.subscriberCount
                    ).toLocaleString('en-US')}{' '}
                    Subscribers
                  </p>
                )}
              </div>
            </div>
            <h1 className='mt-3 fs-3 text-white'>Videos</h1>
            <div className='position-relative'>
              <div
                className='d-flex scrollbody'
                ref={scrollRef}
                style={scrollView}
              >
                <Videos videos={videos} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
