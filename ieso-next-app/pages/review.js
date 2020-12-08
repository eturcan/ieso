import { useState, useEffect } from "react"
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import FAB from '../components/FAB'
import PostSummary from '../components/PostSummary'
import Reply from "../components/Reply"

const getPosts = async () => {
  return await fetch('/api/getUnreviewed', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
}

const reviewPost = async (_id, type, approve) => {
  return await fetch('/api/review', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({_id, type, approve})
  })
}

function Review() {
  let [{posts, replies}, setData] = useState({posts:[], replies: []})
  useEffect(() => {
    let getUnreviewed = async () => {
      let posts = await getPosts()
      let data = await posts.json()
      setData(data)
    }
    getUnreviewed()
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
        <h1>Posts</h1>
        {posts && posts.map(post => <div>
          <PostSummary post={post}/>
          <div onClick={() => {
            reviewPost(post._id, "post", true)
            window.location.reload()
          }}>approve</div>
          <div onClick={() => {
            reviewPost(post._id, "post", false)
            window.location.reload()
          }}>reject</div>
        </div>)}
        <h1>Replies</h1>
        {replies && replies.map(({post,...reply}) => <div>
          <PostSummary post={post[0]}/>
          <Reply text={reply.text}></Reply>
          <div onClick={() => {
            reviewPost(reply._id, "reply", true)
            window.location.reload()
          }}>approve</div>
          <div onClick={() => {
            reviewPost(reply._id, "reply", false)
            window.location.reload()
          }}>reject</div>
        </div>)}
      </Content>
    </div>
  )
}

export default Review
