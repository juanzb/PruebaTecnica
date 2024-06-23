import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)

    fetch(url, { 
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjliODZmMGY2ODcwYWVlNzI1NGM0YzZlYmUzNDVlZCIsIm5iZiI6MTcxOTEwMDI4MS45MzU2MTQsInN1YiI6IjY2NzY0NjljMWI3YTgyMmY4NzlmZTIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rlWvkbm6-9FLl_iIXPsN6zXLJZri5DiYIXoqBZEPH9M'
      }
    })
    .then(response => response.json())
    .then(resdata => setData(resdata))
    .catch(error => setError(error))
    .finally(() => setLoading(false))
  }, [url])
  
  return { data, loading, error }
}

export default useFetch
