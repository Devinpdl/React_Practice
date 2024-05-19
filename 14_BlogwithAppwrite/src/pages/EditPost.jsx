import React, {useEffect, useState} from 'react'
import Container from '../container/Container'
import  PostForm  from '../components/post_form/PostForm';
import appwriteService from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom';


function EditPost() {
    const [post, setPosts] = useState(null);
    //Users comes for edit posts.. means; user do clicks and through navigate goes to that page;
    //From so, the values will be available in URL; For this extract values from URL;

    const {slug} = useParams() ; //From useParams method we're able to extract values
    //from URL;
    //Now, we're able to get the slug value from URL;
    const navigate = useNavigate();

    //Now, if any values changes in slug then to take values from slug we do use useEffect hook for that;
    useEffect (()=> {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                //If slug has given then there will me post that's why we use post parameter inside .then;
                if(post){
                    setPosts(post); //Then we do setPost.
                }
            })
        } else{
            navigate('/');
        }

    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost