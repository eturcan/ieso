import { useState, useEffect } from "react"
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import FAB from '../components/FAB'
import PostSummary from '../components/PostSummary'
import Reply from "../components/Reply"

const fetchMessages = async () => {
  return await fetch('/api/getMessages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
}

function MessageComponent(props) {
  let [message, setMessage] = useState("")

  let approve = () => {
    props.refresh()
    props.reviewPost(props._id, props.type, true, props.username, message)
  }

  let changeMessage = e => setMessage(e.target.value)

  return <>
    {props.children}
    <textarea onChange={changeMessage}></textarea>
    <div onClick={approve}>reply</div>
    <div onClick={reject}>reject</div>
  </>
}

function Review() {
  let [messages, setMessages] = useState([])
  
  let getMessages = async () => {
    let messages = await fetchMessages()
    let data = await messages.json()
    setMessages(data.messages)
  }
  useEffect(() => {
    getMessages()
  }, [])

  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <Content>
        <h1>Messages</h1>
        {
            messages.map(msg => <>
            <div>
                {
                    msg.approved ? "Your post has been approved" : "Your post was not approved"
                }
            </div>
            <div>
                {
                    msg.message
                }
            </div>
            </>)
        }
      </Content>
    </div>
  )
}

export default Review
