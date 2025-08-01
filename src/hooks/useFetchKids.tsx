'use client'

import { useEffect, useState } from "react"

export default function useFetchKids() {
  const url = "http://localhost:1337/api/kids?populate=*"
  
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    (async() => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setResult(json.data)
        setLoading(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })()
  }, [url])

  return { loading, result, error }
}  