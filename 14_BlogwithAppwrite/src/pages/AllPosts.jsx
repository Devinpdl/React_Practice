import React, {useState, useEffect} from 'react'

//We do import appwriteServices for it;
import appwriteService from "../appwrite/config"

import Container from "../container/Container"

import PostCard from "../components/PostCard"


function AllPosts(){
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.documents);
                 // Now, This posts.documents is going under post inside const [posts, setPosts] = useState([]);
//             //Now, You've to loop on it; 
            }
        })
    }, [])
  return (
    <div className='w-full py-8'
    >
        <Container>
            {/* {posts.map((post)=>{
                return <PostCard key={post.id} post={post} />
            })} */}
            <div className='flex flex-wrap items-stretch mx-4 mt-5'>
                {posts.map((post) => (
                    //No need to use return keyword if you wrap it inside parenthesis ()
                        <div key={post.$id} className='p-2 w-1/3'>
                            <PostCard {...post} />
                        </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts