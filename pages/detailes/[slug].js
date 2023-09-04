import React from 'react'
import { useRouter } from 'next/router'

export default function slug() {
  console.log ("kk")
    const router = useRouter()
  return (
    <div>{router.query.slug}</div>
  )
}
