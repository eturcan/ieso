import Head from 'next/head'
import Form from '@rjsf/material-ui'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import post from '../schemas/post'
import postUI from '../schemas/postUI'

const submit = async post => {
  let result = await fetch('/api/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  })
}

const Container = styled.div`
  span.MuiTypography-root {
  }

  .MuiDivider-root {
  }
`

export default function Post() {
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Content>
        <Container>
          <Form schema={post} uiSchema={postUI} onSubmit={submit}/>
        </Container>
      </Content>
    </div>
  )
}