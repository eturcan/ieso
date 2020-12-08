import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'
import FAB from '../../components/FAB'
import PostDetails from '../../components/PostDetails'
import Reply from "../../components/Reply"
import ReplyInput from "../../components/ReplyInput"

const getPost = async (req, pid) => {
  return await fetch((req ? process.env.NEXTAUTH_URL : "") + '/api/getPost', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({pid})
  })
}

const PostPage = ({post, replies}) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>ieso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/>
      <FAB
        icon="arrow-left"
        text="Back"
        onClick={() => router.back()}
      />
      <Content>
        <PostDetails post={post}/>
        <ReplyInput pid={post._id}/>
        {
          replies.map(({text}) => <Reply text={text}/>)
        }
      </Content>
    </div>
  )
}

PostPage.getInitialProps = async (ctx) => {
  const { pid } = ctx.query
  const res = await getPost(ctx.req, pid)
  const json = await res.json()
  return json
}

export default PostPage
