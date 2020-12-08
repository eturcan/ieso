import styled from 'styled-components'
import Link from 'next/link'

let Container = styled.div`
  font-family: 'Spectral';
  padding: 1rem;
  box-sizing: border-box;
  background-color: white;
  margin: 2rem 0;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.03);
  line-height: 2rem;
  cursor: pointer;

  div {
    margin-bottom: 1rem;

    @media only screen and (max-width: 1000px) {
      margin-bottom: 0;
    }
  }
`

let StyledAttribute = styled.div`
  display: inline;

  @media only screen and (max-width: 1000px) {
    display: block;
  }

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

let Align = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  && {
    margin-bottom: 0;
  }
`

const Attribute = ({emotion, rank}) => <StyledAttribute>
  {emotion}
  <Badge>
    {rank}
  </Badge>
</StyledAttribute>

const PostSummary = ({post: {emotions_description, event_description, emotions, replies, _id}}) => <Link href={`/posts/${_id}`}>
  <Container>
    <div>
      {emotions_description}
    </div>
    <div>
      {event_description}
    </div>
    <Align>
      <div>
      {
        Object.entries(emotions)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([emotion, rank]) => <Attribute
            emotion={emotion}
            rank={rank}
          />
        )
      }
      </div>
      <Attribute
        emotion="replies"
        rank={replies || 0}
      />
    </Align>
  </Container>
</Link>

export default PostSummary