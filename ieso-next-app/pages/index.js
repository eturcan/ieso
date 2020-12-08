import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import FAB from '../components/FAB'
import PostSummary from '../components/PostSummary'

const getPosts = async (req, page) => {
  return await fetch((req ? process.env.NEXTAUTH_URL : "") + '/api/getPosts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({page})
  })
}

function Home({posts, moderator}) {
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar moderator={moderator}/>
      <Link href='/post'>
        <FAB
          icon="pen"
          text="Post"
        />
      </Link>
      <Content>
        {posts.map(post => <PostSummary post={post}/>)}
      </Content>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await getPosts(ctx.req, 0)
  const json = await res.json()
  return json
}

export default Home
