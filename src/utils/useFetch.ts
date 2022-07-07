import { useEffect, useState } from 'react'

export function useFetch<T>(url: string) {
  const [response, setResponse] = useState<T | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!url) return

    setIsLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((task) => setResponse(task))
      .catch(() => {
        setResponse(undefined)
        setIsLoading(false)
      })
  }, [url])

  useEffect(() => {
    // Set is loading to false once a selected task has been set
    if (response) {
      setIsLoading(false)
    }
  }, [response])

  return {
    response,
    isLoading,
  }
}
