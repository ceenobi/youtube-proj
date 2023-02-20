import React from 'react'
import { VideoCard } from './'

export default function Videos({ videos }) {
  return (
    <div className='d-flex flex-wrap gap-3'>
      {videos.map((item, idx) => (
         <VideoCard {...item} key={idx} />
      ))}
    </div>
  )
}
