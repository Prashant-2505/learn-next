'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col text-center gap-5 py-5 border-2 border-white h-full'> {/* Removed extra ] */}

      Home Page


      {/* use router and link */}
      <div className="container-1"> {/* Changed from "1 container" to valid className */}
        <button type="button" className='bg-gray-200 text-black p-4 m-2'>Chapter 1: Routing using useRouter</button>

        <p className='bg-yellow-200 text-black p-4 m-2'>
          The <span>useRouter hook</span> allows you to programmatically change routes inside Client Components.
        </p>
        <p className='bg-pink-200 text-black p-4 m-2'>
          <span>Link</span> also used for routing but if routing is done by some interaction on component like on button event click at that time use useRouter
        </p>

        <button
          type="button"
          className='border-2 bg-red-400 p-3'
          onClick={() => router.push('/about')}
        >
          Click me to go on about page
        </button>
        <button
          type="button"
          className='border-2 bg-red-400 p-3'
          onClick={() => router.push('/login')}
        >
          Click me to go on login page
        </button>
      </div>



      {/* hide specific folder from url */}
      <div className='container-2'> {/* Changed from "2 container" */}
        <button type="button" className='bg-gray-200 text-black p-4 m-2'>Chapter 2: Hide routing folder from url</button>
        <p className='bg-orange-300 p-3 m-2'>
          Suppose you want create specific folder where all same kind of page present like <span>auth folder</span>
          which contain page like <span>login</span>, <span>register</span> so when you try to go on that page login then url be like <span>localhost/auth/login</span> but we don&apos;t want it we want it like <span>localhost/login</span>.
          For that we can wrap the parent folder <span>auth</span> in <span>()</span>.
        </p>
      </div>



      {/* dynamic route */}
      <div className="container-3"> {/* Changed from "3 container" */}
        <button type="button" className='bg-gray-200 text-black p-4 m-2'>Chapter 3: Dynamic route</button>

        <p className='bg-green-600'>
          When you don&apos;t know the exact segment names ahead of time and want to create routes from <span>dynamic data</span>, you can use <span>Dynamic Segments</span> that are filled in at request time or prerendered at build time.
        </p>

        <p className='bg-green-600'>
          Suppose you have a route <span>/users</span> and that route have multiple users like <span>userA, userB</span> so you not want to create all separate pages for multiple users like <span>/user/userA</span> and <span>/user/userB</span> so on... to avoid that we use dynamic routes means we make route dynamic.
        </p>

        <p className='bg-green-600'>
          To create <span>dynamic route</span> enclose parent folder in <span>[]</span> it&apos;ll look like <span>[user]</span> and then inside create another folder named anything you want like <span>allUsers</span> and that name has to be relative means user have something that define separate from each other it can be anything like <span>id</span> or <span>slug</span>. Generally use that name in parent page <span>user</span> which has to same what you received from route and then child folder you can create a <span>page.jsx</span> which route be like <span>/user/124</span> and that <span>124</span> is user dynamic id.
        </p>

        <p className='bg-green-600'>
          And you can access that <span>id</span> of user on user page taking it as props named <span>params</span> and <span>id</span> is <span>params.id</span>.
        </p>

        <button
          type="button"
          className='btn'
          onClick={() => router.push('/user/124')}
        >
          Click me to go on dynamic route
        </button>
      </div>


      {/* catching all routes */}
      <div className="container-4"> {/* Changed from "4 container" */}
        <button type="button" className='bg-gray-200 text-black p-4 m-2'>Chapter 4: Catch-all route</button>

        <p className='bg-purple-600'>
          <span>Catch-all routes</span> are useful when you need to handle a varying number of <span>URL segments</span>. For example, you might want to create a route that matches any number of nested categories, like <span>/categories/category1/category2/category3</span>.
        </p>

        <p className='bg-purple-600'>
          To create a catch-all route, you need to include an <span>ellipsis (...)</span> before the parameter name in the filename or folder name, like this: <span>[...categories]</span>. This will match any number of segments following the <span>/categories path</span>.
        </p>

        <p className='bg-purple-600'>
          Parent folder <span>project</span> and its child folder can be named anything but make sure name has to relative <span>[...all]</span> now you can create <span>page.jsx</span>.
        </p>

        <button
          type="button"
          onClick={() => router.push('/projects/type/date/')}
          className="btn"
        >
          Click me to go on all routes
        </button>
      </div>


      {/* custom page not found */}
      <div className="container-5"> {/* Changed from "5 container" */}
        <button type="button" className='bg-gray-200 text-black p-4 m-2'>Chapter 5: Creating custom page not found</button>
        <p className='bg-amber-600'>
          Very simple create a page at root of app named <span>not-found.jsx</span>.
        </p>
      </div>


      {/* redirect */}
      <div className="container-6"> {/* Changed from "6 container" */}
        <button type="button" className='bg-gray-200 text-black p-4 m-2'>Chapter 6: Redirect</button>
        <p className="bg-pink-600">
          The <span>redirect function</span> allows you to redirect the user to <span>another URL</span>. redirect can be used in Server Components, Route Handlers, and Server Actions.
        </p>

        <p className="bg-pink-600">
          If a resource doesn&apos;t exist, you can use the <span>notFound function</span> instead.
        </p>

        <p className="bg-pink-600">
          The redirect function accepts two arguments: <span>path</span> and <span>type</span>.
        </p>

        <button
          type="button"
          onClick={() => router.push('/user/4')}
          className='btn'
        >
          Click me to go on user page where is a condition if user is 5 then it will redirect to another url which is login url
        </button>

      </div>

      {/* metadata */}
      <div className="container-7"> {/* Changed from "6 container" to "container-7" for uniqueness */}
        <button type="button" className='bg-gray-200 text-black p-4 m-2'>Chapter 7: Metadata</button>
        <p className='bg-red-200'>
          <span>MetaData</span> is useful for SEO; it is details about the current page client on and that details is reflect on the top of the url at the tab.
        </p>

        <p className='bg-red-200'>
          <span>MetaData</span> is only generated or used in server components but in next we have to create client component because we have to use some client side service like onClick, useState we almost use this in all pages, means we can use metadata here , so as next js documentations say that we have to create different file where we are using client interaction and then it import it to the page which is server components and then use <span>MetaData </span> for example there is folder named products where we list all products and we have to add client interaction so in that page we used some client components but we also create a different page in same product folder which is a server component and that component import that page where we interact with user and now we can use metadata in that server components.
        </p>
      </div>

      {/* fetch data in client component */}
      <div className="container-8"> {/* added container-8 instead of empty div */}
        {/* Content here if needed */}
      </div>
    </div>
  )
}

export default Home
