"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import LoadingPage from './loading'
import Cources from './components/Cources'
import CourceSearch from './components/CourceSearch'
const HomePage = () => {
  const [courceList, setCourceList] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getCources = async () => {
      const response = await fetch("/api/cources")
      const data = await response.json()
      setCourceList(data)
      setLoading(false)
    }
    getCources()
  }, [])
  if (loading) {
    return <LoadingPage />
  }
  return (
    <div>
      <h1>Welcome To Course Store</h1>
      <CourceSearch getSearchResults={(results) => setCourceList(results)} />
      <Cources courceList={courceList} />
    </div>
  )
}

export default HomePage