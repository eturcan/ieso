import styled from 'styled-components'
import { signIn, signOut, useSession } from 'next-auth/client'
import register from '../scripts/register'

let Container = styled.div`
  font-family: 'Work Sans';
  font-weight: 300;
  font-size: 1rem;
  line-height: 2rem;

  button {
    border: none;
    padding 0.2rem 1rem;
    background-color: #81A4CD;
    color: white;
    margin-right: 0.5rem;
    font-family: 'Work Sans';
    font-weight: 300;
    font-size: 1rem;
  }
`

const Account = () => {
  const [ session ] = useSession()

  return <Container>
    {!session && <>
      <button onClick={signIn}>Sign In</button>
      <button onClick={register}>Register</button>
    </>}
    {session && <>
      signed in as {session.user.name} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </Container>
}

export default Account