import styled from 'styled-components'
import Link from 'next/link'

let Container = styled.div`
  font-family: 'Abril Fatface';
  font-size: 3rem;

  a {
    text-decoration: none;
    color: black;
  }
`

const HomeButton = () => <Container>
  <Link href="/"><a>ieso</a></Link>
</Container>

export default HomeButton