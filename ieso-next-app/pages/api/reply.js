import { MongoClient, ObjectID } from 'mongodb'
import { getSession } from 'next-auth/client'
const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);

export default async (req, res) => {
  const session = await getSession({ req })
  if (!session) {
    res.status(401)
    res.end()
    return
  }
  const { pid, text } = req.body
  await client.connect()
  const postsDb = client.db("posts")
  const postsCol = postsDb.collection("posts")
  const repliesCol = postsDb.collection("replies")
  await postsCol.updateOne({_id: ObjectID(pid)}, { $inc: { replies: 1 } })
  let result = await repliesCol.insertOne({
    username: session.user.name,
    timestamp: Date.now(),
    post_id: ObjectID(pid),
    text,
    reviewed: false
  })
  req.statusCode = 200
  res.json({result})
}