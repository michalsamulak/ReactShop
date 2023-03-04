import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url: string) => {
    const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(()=> {
    setLoading(true)
    axios({
        method: 'GET',
        baseURL: 'https://fakestoreapi.com',
        url: `/${url}`,
      })
        .then(({ data }) => {
          setData(data)
        })
        .catch(err => console.dir(err))
        .finally(() => setLoading(false))
      },[])
  
    return { data, loading}
  

 
}
