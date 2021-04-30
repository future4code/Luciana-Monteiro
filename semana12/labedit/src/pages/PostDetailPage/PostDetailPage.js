import { Typography } from "@material-ui/core"
import React from "react"
import { useParams } from "react-router"
import { BASE_URL } from "../../constants/url"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { PostContainer, ScreenContainer } from "./styled"

const PostDetailPage = () => {
  useProtectedPage()
  const params = useParams()
  const postDetail = useRequestData({}, `${BASE_URL}/posts/${params.id}`)
  console.log(postDetail)

  return (
    <ScreenContainer>
      {postDetail &&
      <PostContainer>
        <h1>PostDetailPage</h1>
        {postDetail.title}
        {postDetail.text}
        
      </PostContainer>}
    </ScreenContainer>
  )
}

export default PostDetailPage