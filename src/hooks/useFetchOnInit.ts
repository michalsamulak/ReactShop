import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiPaths } from '../utils/utils';


export const useFetchOnInit = <T>(url: string) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    axios<T>({
      method: 'GET',
      baseURL: apiPaths.baseUrl,
      url: `/${url}`,
    })
      .then(({ data }) => {
        if (data === null) throw new Error('no data')
        setData(data)
      })
      .catch(err => {
        setError(err)
      }
      )
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }



}
