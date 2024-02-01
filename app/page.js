'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col text-center gap-5 py-5 border-2 border-white h-full]'>
      Home Page


      {/* use router and link */}
      <div className="1 container">
        <button className=' bg-gray-200 text-black p-4 m-2'>Chapter 1: Routing using userRouter</button>

        <p className=' bg-yellow-200 text-black p-4 m-2'>The <span>useRouter hook</span> allows you to programmatically change routes inside Client Components.
        </p>
        <p className=' bg-pink-200 text-black p-4 m-2'>
          <span>Link</span> also used for routing but if routing is done by some interaction on component like on button event click at that time use useRouter
        </p>

        <button className=' border-2 bg-red-400 p-3'
          onClick={() => router.push('/about')}> click me  to go on about page</button>
        <button className=' border-2 bg-red-400 p-3'
          onClick={() => router.push('/login')}> click me  to go on login page</button>
      </div>



      {/* hide specfic folder from url */}
      <div className='2 container'>
        <button className=' bg-gray-200 text-black p-4 m-2'>Chapter 2: Hide routing folder from url</button>
        <p className=' bg-orange-300 p-3 m-2'>
          suppose you want create specific folder where all same kind of page present like <span>auth folder</span>
          which contain page like <span>login</span>
          <span>register</span> so when you try to go on that page  login then url be like <span>localhost/auth/login</span> but we dont want it we want it like <span>localhost/login</span>
          for that we can wrap the parent folder <span>auth</span> in <span>()</span>
        </p>
      </div>



      {/* dynamic route */}
      <div className="3 container ">
        <button className=' bg-gray-200 text-black p-4 m-2'>Chapter 2: Dynamic route</button>

        <p className='bg-green-600'>wthen you don't know the exact segment names ahead of time and want to create routes from <span>dynamic data</span>, you can use <span>Dynamic Segments</span> that are filled in at request time or prerendered at build time.</p>

        <p className='bg-green-600'>suppose you have a route <span>/users</span> and that route have multiple users like <span>userA, userB</span> so you not want to create all seperate pages for multiple users like <span>/user/userA</span> and <span>user/userB</span> so on... to avois that we use dynamic routes means we make rout dynamic </p>

        <p className='bg-green-600'>to create <span>dynamic route</span> enclose parent folder in <span>[]</span> its be look like <span>[user]</span> and then iside create another folder named anything you want like <span>allUsers</span> and that that name has to be relative means user have something that define seperate from each other it can be anything like <span>id</span> or <span>slug</span> so genrally use that name in parent page <span>user</span> which has to same what you recieved frim route and then child folder you can create a <span>page.jsx</span> which route be like <span>/user/124</span> and that <span>124</span> is user dynamic id </p>

        <p className='bg-green-600'>and you can access that <span>id</span> of user on user page taking it as props named <span>prams</span> nad <span>id</span> is <span>params.id</span></p>

        <button className='btn'
          onClick={() => router.push('/user/124')}>click me to go on dynamic route</button>
      </div>


      {/*  catching all routes */}
      <div className="4 container">
        <button className=' bg-gray-200 text-black p-4 m-2'>Chapter 2: catch all  route</button>

        <p className=' bg-purple-600'><span>Catch-all routes</span> are useful when you need to handle a varying number of <span>URL segments</span>. For example, you might want to create a route that matches any number of nested categories, like <span>/categories/category1/category2/category3</span>.</p>

        <p className=' bg-purple-600'>to create a catch-all route, you need to include an <span>ellipsis (...)</span> before the parameter name in the filename or folder name, like this: <span>[...categories]</span>. This will match any number of segments following the <span>/categories path</span>.</p>

        <p className=' bg-purple-600'>parent folder <span>project</span> and its child folder can be named anything but make sure name has to relative <span>[...all]</span> now you can create <span>page.jsx</span></p>

        <button onClick={() => router.push('/projects/type/date/')}
          className="btn"> click me to go on all routes</button>
      </div>


      {/* custom page not found */}
      <div className="5 container">
        <button className=' bg-gray-200 text-black p-4 m-2'>Chapter 5: creating custom page not found</button>
        <p className=' bg-amber-600'>very simple create a page at root of app named <span>not-found.jsx</span></p>
      </div>


      {/*  redirect  */}
      <div className="6 container">
        <button className=' bg-gray-200 text-black p-4 m-2'>Chapter 5: redirect</button>
        <p className="bg-pink-600">
          The <span>redirect function</span> allows you to redirect the user to <span>another URL</span>. redirect can be used in Server Components, Route Handlers, and Server Actions.
        </p>

        <p className="bg-pink-600">If a resource doesn't exist, you can use the <span>notFound function</span> instead.</p>

        <p className="bg-pink-600">The redirect function accepts two arguments: <span>path</span> and <span>type</span></p>
        
        <button onClick={()=>router.push('/user/4')}
         className=' btn'
         > click me to go on user page where is a condition if user is 5 then it will redirect to another url which is login url</button>

      </div>
    </div>
  )
}

export default Home
