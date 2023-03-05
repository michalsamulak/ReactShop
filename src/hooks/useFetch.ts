import { useState, useEffect } from 'react';
import axios from 'axios';
import { IProductsArray } from '../types';

export const useFetch = <T>(url: string) => {
    const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T | null>(null)


  useEffect(()=> {
    setLoading(true)
    axios({
        method: 'GET',
        baseURL: 'https://fakestoreapi.com',
        url: `/${url}`,
      })
        .then(({ data }) => {
            if(data === null) throw new Error('no data')
            setData(data)
            // setData(Object.values(data))
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
      },[])
  
    return { data, loading}
  

 
}
