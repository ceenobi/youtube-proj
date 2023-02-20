import { useState } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Layout } from '../components'
import ChannelDetail from '../pages/ChannelDetail'
import Feed from '../pages/Feed'
import SearchFeed from '../pages/SearchFeed'
import VideoDetail from '../pages/VideoDetail'

export default function RootLayout() {
  const [selectedCategory, setSelectedCategory] = useState('New')

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <Layout
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        }
      >
        <Route index element={<Feed selectedCategory={selectedCategory} />} />
        <Route path='channel/:id' element={<ChannelDetail />} />
        <Route path='search/:searchquery' element={<SearchFeed />} />
        <Route path='video/:id' element={<VideoDetail />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
