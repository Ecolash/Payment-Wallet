"use client"
import React from 'react'
import { Button } from '@repo/ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const page = () => {
  const router=useRouter();
  return (
    <div>
      <Button onClick={()=>{
        signOut()
        router.push('/api/auth/signin')}}>Log Out</Button>
    </div>
  )
}

export default page
