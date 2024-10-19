import React from 'react'
import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Home page</h1>
      <Button variant='outline' size='lg' className="capitalize">Click me</Button>
    </div>
  )
}

export default HomePage