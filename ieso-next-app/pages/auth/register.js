import { useRouter } from 'next/router'
import { csrfToken } from 'next-auth/client'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import FAB from '../../components/FAB'
import Link from 'next/link'

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

let Disclaimer = styled.div`
  max-width: 30rem;

  div {
    margin-bottom: 1rem;
  }
`

let Error = styled.div`
  max-width: 30rem;
  font-weight: 600;
`

function Register({ csrfTokenProp, query }) {
  const router = useRouter()
  return <Container>
    <form method='post' action='/api/auth/callback/credentials'>
      <Disclaimer>
        <div>Welcome to ieso.</div>
        <div>When creating an account, please refrain from including any identifiable information
        in order to help preserve your anonymity. In the case that your username contains any personally
        identifiable information, your account and any associated content will be permanently deleted.</div>
        <div>For more information regarding ieso, please refer to the <Link href="/information">information sheet</Link>.</div>
        <div>By creating an account, you confirm that you are over 18 years of age.</div>
      </Disclaimer>
      {
        query.error === "CredentialsSignin" && <Error>
          <div>Those credentials are already associated with a user</div>
        </Error>
      }
      <input name='csrfToken' type='hidden' defaultValue={csrfTokenProp}/>
      <input name='register' type='hidden' defaultValue="true"/>
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
      <Button variant="contained" size="small" color="primary" type='submit'>Register</Button>
    </form>
    <FAB
      icon="arrow-left"
      text="Back"
      onClick={() => router.back()}
    />
  </Container>
}

Register.getInitialProps = async (context) => {
  return {
    csrfTokenProp: await csrfToken(context),
    query: context.query
  }
}

export default Register