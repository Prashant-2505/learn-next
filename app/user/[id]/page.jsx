import { redirect } from 'next/navigation'
import React from 'react'

const page = ({ params }) => {
  console.log(params)
  return (
    <div>
      its me {params.id}
      <p>if my id is 5 then i will redirected to login page</p>

      {params.id === '5' ? redirect('/login') : ''}
    </div>
  )
}

export default page
