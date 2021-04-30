import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent } from './styled'

const PostCard = (props) => {

  return (
    <PostCardContainer onClick={props.onClick}>
      <CardActionArea>
        <PostCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </PostCardContent>
      </CardActionArea>
    </PostCardContainer>
  )
}

export default PostCard