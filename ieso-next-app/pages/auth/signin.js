import { useRouter } from 'next/router'
import { csrfToken } from 'next-auth/client'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import FAB from '../../components/FAB'

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

let Error = styled.div`
  max-width: 30rem;
  font-weight: 600;
`

function SignIn({ csrfTokenProp, query }) {
  const router = useRouter()
  return (
    <Container>
      <form method='post' action='/api/auth/callback/credentials'>
        {
          query.error === "CredentialsSignin" && <Error>
            <div>Those credentials did not match an account</div>
          </Error>
        }
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
      <FAB
        icon="arrow-left"
        text="Back"
        onClick={() => router.back()}
      />
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