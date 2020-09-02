import styled from 'styled-components'

let Container = styled.div`
  font-family: 'Spectral';
  padding: 1rem;
  box-sizing: border-box;
  background-color: white;
  margin: 2rem 0;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.03);
  line-height: 2rem;

  div {
    margin-bottom: 1rem;
  }
`

let StyledAttribute = styled.div`
  display: inline;

  :not(:last-child) {
    margin-right: 1rem;
  }
`

let Badge = styled.div`
  display: inline;
  border-radius: 10px;
  background: black;
  color: white;
  font-family: 'Work Sans';
  padding: 0 0.5rem;
  margin: 0 0.5rem;
`

const Attribute = ({emotion, rank}) => <StyledAttribute>
  {emotion}
  <Badge>
    {rank}
  </Badge>
</StyledAttribute>

const Post = ({post}) => <Container>
  <div>
    {post.emotions_description}
  </div>
  <div>
    {post.event_description}
  </div>
  {
    console.log(post.emotions) || 
    Object.entries(post.emotions)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([emotion, rank]) => <Attribute
        emotion={emotion}
        rank={rank}
      />
    )
  }
</Container>

export default Post