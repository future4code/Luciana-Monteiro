import React from "react"
import { BASE_URL } from "../../constants/url"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from '../../hooks/useRequestData'


const PostPage = () => {
  useProtectedPage()
  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)

  const postCards = posts.posts && posts.posts.map((post) => {
    return <p>{post.title}</p>
  })

  return (
    <div>
      <h1>PostPage</h1>
      {postCards}
    </div>
  )
}

export default PostPage