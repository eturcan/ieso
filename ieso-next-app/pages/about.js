import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Container = styled.div`
  font-family: 'Spectral';
  font-weight: 300;
`

export default function About() {
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
            About
          </h1>
          <p>ieso is a platform where users can share their emotions, experiences, and interact with other users.</p>
          <p>Posts not only help users in coming to terms with their difficult life experiences, but also help social workers identify how to best help individuals during this difficult and isolating time. In addition, participating in the platform assists NLP research in identifying states of distress.</p>
          <p>Posting on ieso is done pseudonymously in order to protect your identity. In order to maintain the platform as a place for healing and compassion, we rely on the generosity of volunteer student social workers in order to vet posts. Thank you for your understanding and help in building up this community.</p>
        </Container>
      </Content>
    </div>
  )
}