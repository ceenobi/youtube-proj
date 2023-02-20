import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from '../utils/constants'

export default function VideoCard({
  id: { videoId },
  snippet: { thumbnails, title, channelId, channelTitle },
}) {
  return (
    <div className='vidCard mb-2'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Image
          src={thumbnails?.high?.url}
          alt={title}
          loading='lazy'
          className='img-fluid rounded-3'
          title={title.slice(0, 60)}
        />
      </Link>
      <div className='d-flex gap-3 mt-2'>
        <Link to={`/channel/${channelId}`}>
          <Image
            src={thumbnails?.high?.url}
            alt={title}
            className='rounded-circle'
            style={{ height: '30px', width: '30px' }}
          />
        </Link>
        <div>
          <p className='text-white mb-0'>
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </p>
          <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
            <p className='fw-bold text-secondary small'>
              {channelTitle || demoChannelTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
