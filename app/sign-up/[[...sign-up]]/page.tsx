
import { SignUp } from '@clerk/nextjs'
import { Suspense } from 'react'

import { connection } from 'next/server'

export default async function Page() {
    await connection()

  return <Suspense fallback={<div className='flex justify-center items-center h-screen'>Loading...</div>}><SignUp /></Suspense>
}
