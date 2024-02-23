import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  //we've discarded below approach and used the one above because we want to render before fetch using loader func..
  //We stored the fetched data from useLoaderData into data variable for this..
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Sherlocked21B')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='bg-lime-600 text-white text-center
    m-5 text-4xl p-5'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Github picture" 
    width={500}  /> </div>
  )
}

export default Github

//Now, we are using the loader part to load the data by commenting above function Github()..
//As soon as we comment the above function Github(), it'll not return data.followers
//and it'll show an error because data is not defined.

export const githubInfoLoader = async()=>{
 const response = await fetch('https://api.github.com/users/Sherlocked21B');
 return response.json()
}
//Now, use this concept of GithubInfoLoader in main.jsx which is the loader function approach..