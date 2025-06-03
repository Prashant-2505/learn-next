import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <div>
       catching all routes and all routs is given
       {params.all.map((route,i)=>{
        return(
            <p key={i}>route {i+1}: {route}</p>
        )
       })}
    </div>
  )
}

export default page
