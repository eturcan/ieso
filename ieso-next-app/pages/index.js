import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from "react"
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import FAB from '../components/FAB'
import PostSummary from '../components/PostSummary'

const getPosts = async (req, page) => {
  const res = await fetch((req ? process.env.NEXTAUTH_URL : "") + '/api/getPosts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({page})
  })
  const {posts} = await res.json()
  return posts
}

function Home() {
  const [ posts, setPosts ] = useState([])
  useEffect(() => {
    let fetchPosts = async () => setPosts(await getPosts())
    fetchPosts()
  }, [])

  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Link href='/post'>
        <FAB
          icon="pen"
          text="Post"
        />
      </Link>
      <Content>
        {posts.map((post, i) => <PostSummary post={post} key={i}/>)}
      </Content>
    </div>
  )
}

export default Home
