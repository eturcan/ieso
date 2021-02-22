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

const reviewPost = async (_id, type, approve, username, message) => {
  return await fetch('/api/review', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({_id, type, approve, username, message})
  })
}

function ReviewComponent(props) {
  let [message, setMessage] = useState("")

  let approve = async () => {
    await props.reviewPost(props._id, props.type, true, props.username, [message])
    props.refresh()
  }
  let reject = async () => {
    await props.reviewPost(props._id, props.type, false, props.username, [message])
    props.refresh()
  }
  let changeMessage = e => setMessage(e.target.value)

  return <>
    {props.children}
    <textarea onChange={changeMessage}></textarea>
    <div onClick={approve}>approve</div>
    <div onClick={reject}>reject</div>
  </>
}

function Review() {
  let [{posts, replies}, setData] = useState({posts:[], replies: []})
  
  let getUnreviewed = async () => {
    let posts = await getPosts()
    let data = await posts.json()
    setData(data)
  }
  useEffect(() => {
    getUnreviewed()
  }, [])

  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Content>
        <h1>Posts</h1>
        {posts && posts.map(post => <ReviewComponent
          _id={post._id}
          type={"post"}
          username={post.username}
          reviewPost={reviewPost}
          refresh={getUnreviewed}
        >
          <PostSummary post={post}/>
        </ReviewComponent>)}
        <h1>Replies</h1>
        {replies && replies.map(({post,...reply}) => <div>
          <PostSummary post={post[0]}/>
          <Reply text={reply.text}></Reply>
          <div onClick={() => {
            reviewPost(reply._id, "reply", true)
            getUnreviewed()
          }}>approve</div>
          <div onClick={() => {
            reviewPost(reply._id, "reply", false)
            getUnreviewed()
          }}>reject</div>
        </div>)}
      </Content>
    </div>
  )
}

export default Review
