import styled from 'styled-components'
import Link from 'next/link'

let Container = styled.div`
  font-family: 'Work Sans';

  a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 300;
  }
`

const MenuItem = props => <Container>
  <Link href={props.href}>
    <a>{props.children}</a>
  </Link>
</Container>

export default MenuItem