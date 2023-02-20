export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

export const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}
