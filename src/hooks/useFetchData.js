import { useEffect, useState } from 'react'
import { BASE_URL, options } from '../api/config'
import axios from 'axios'

export default function useFetchData(url) {
  const [data, setData] = useState([])
  const [channelDetail, setChannelDetail] = useState([])
  const [videoDetail, setVideoDetail] = useState(null)
  const [error, setError] = useState(null)
  const [statusCode, setStatusCode] = useState()

  useEffect(() => {
    if (!url) return
    async function fetchData() {
      try {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        setData(response.data?.items)
        setChannelDetail(response.data?.items[0])
        setVideoDetail(response.data?.items[0])
        setStatusCode(response.status)
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
    fetchData()
  }, [url])
  return { data, error, statusCode, channelDetail, videoDetail }
}
