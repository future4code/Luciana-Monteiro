import React from "react"
import { useParams } from "react-router"
import useProtectedPage from "../../hooks/useProtectedPage"

const PostDetailPage = () => {
  useProtectedPage()
  const params = useParams()
  console.log(params)

  return (
    <div>
      <h1>PostDetailPage</h1>
    </div>
  )
}

export default PostDetailPage