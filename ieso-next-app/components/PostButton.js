import styled from 'styled-components'
import Link from 'next/link'

let Container = styled.div`
  font-family: 'Work Sans';

  a {
    padding 0.2rem 1rem;
    background-color: #81A4CD;
    color: white;
    margin-right: 0.5rem;
    font-family: 'Work Sans';
    font-weight: 300;
    font-size: 1rem;
    text-decoration: none;
  }
`

const PostButton = props => <Container>
  <Link href='/post'>
    <a>Post</a>
  </Link>
</Container>

export default PostButton