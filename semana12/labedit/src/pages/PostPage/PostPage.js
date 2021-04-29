import React from "react"
import { useHistory } from "react-router"
import PostCard from "../../components/Header/PostCard/PostCard"
import { BASE_URL } from "../../constants/url"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from '../../hooks/useRequestData'
import { goToPostDetailPage } from "../../routes/coordinator"


const PostPage = () => {
  useProtectedPage()
  const history = useHistory()

  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)

  const onClickCard = (id) => {
    goToPostDetailPage(history, id)
  }


  const postCards = posts.posts && posts.posts.map((post) => {
    return (
      <PostCard
        key={post.post_id}
        title={post.title}
        image={post.image}
        onClick={()=>onClickCard(post.post_id)}
      />
    )
  })


  return (
    <div>
      <h1>PostPage</h1>
      {postCards}
    </div>
  )
}

export default PostPage