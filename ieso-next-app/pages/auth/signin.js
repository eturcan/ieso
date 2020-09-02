import { csrfToken } from 'next-auth/client'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'

let Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans';

  & .MuiTextField-root, .MuiButton-root {
    margin: 1rem 0;
  }
`

function SignIn({ csrfTokenProp, query }) {
  return (
    <Container>
      <form method='post' action='/api/auth/callback/credentials'>
        <input name='csrfToken' type='hidden' defaultValue={csrfTokenProp}/>
        <input name='register' type='hidden' defaultValue="false"/>
        <TextField
          id='username'
          label='Username'
          name='username'
          type='text'
          fullWidth
        />
        <TextField
          id='password'
          label='Password'
          name='password'
          type='password'
          fullWidth
        />
        <Button variant="contained" size="small" color="primary" type='submit'>Sign In</Button>
      </form>
    </Container>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfTokenProp: await csrfToken(context),
    query: context.query
  }
}

export default SignIn