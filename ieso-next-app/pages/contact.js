import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Container = styled.div`
  font-family: 'Spectral';
  font-weight: 300;
`

export default function Contact() {
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Content>
        <Container>
          <h1>
            Contact
          </h1>
          <p>You may reach Professor Kathleen McKeown regarding this study at <a href="mailto:krm8@columbia.edu">krm8@columbia.edu</a>.</p>
        </Container>
      </Content>
    </div>
  )
}