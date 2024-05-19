import React from 'react'
import PostForm from '../components/post_form/PostForm'

import Container from '../container/Container'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
        <PostForm />
    </Container>
    </div>
  )
}

export default AddPost