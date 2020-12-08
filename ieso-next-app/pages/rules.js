import Head from 'next/head'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Spectral';
  font-weight: 300;
`

export default function Rules() {
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Content>
        <Container>
          <h1>Site Rules</h1>
          <li>If you need immediate help, please contact a suicide prevention hotline.</li>
          <li>Please treat one another with kindness and respect. Avoid casting judgments upon other posters and commenters. Avoid name-calling, dismissive responses, and other types of harassment.</li>
          <li>Please avoid identifying information.</li>
          <li>Social workers working on the site have final say on whether posts and comments are published.</li>
          <li>Report offensive posts or posts which break the site’s TOS.</li>
        </Container>
      </Content>
    </div>
  )
}