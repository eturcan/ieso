import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import privacy from '../documents/privacy'

const Container = styled.div`
  font-family: 'Spectral';
  font-weight: 300;
`

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Content>
        <Container>
          <div dangerouslySetInnerHTML={{__html: privacy}}/>          
        </Container>
      </Content>
    </div>
  )
}