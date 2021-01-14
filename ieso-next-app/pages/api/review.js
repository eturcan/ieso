import { MongoClient, ObjectID } from 'mongodb'
import { getSession } from 'next-auth/client'
const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);

export default async function review(req, res) {
  const session = await getSession({ req })
  if (!session) {
    res.status(401)
    res.end()
    return
  }
  await client.connect()
  const postsDb = client.db("posts")
  const { _id, type, approve, username } = req.body
  if (!_id || !type) {
    res.status(406)
    res.end()
    return
  }
  if (type === "post") {
    const postsCol = postsDb.collection("posts")
    const notiCol = postsDb.collection("notifications")
    if (approve) {
      await postsCol.updateOne({_id: ObjectID(_id)}, {$set: { reviewed: true}})
      await notiCol.insertOne({username, id: ObjectID(_id), approved: true, type: "post"})
    }
    else {
      await postsCol.deleteOne({_id: ObjectID(_id)})
      await notiCol.insertOne({username, id: ObjectID(_id), approved: false, type: "post"})
    }
  } else if (type === "reply") {
    const repliesCol = postsDb.collection("replies")
    if (approve) {
      await repliesCol.updateOne({_id: ObjectID(_id)}, {$set: { reviewed: true}})
      await notiCol.insertOne({username, id: ObjectID(_id), approved: true, type: "reply"})
    }
    else {
      await repliesCol.deleteOne({_id: ObjectID(_id)})
      await notiCol.insertOne({username, id: ObjectID(_id), approved: false, type: "reply"})
    }
  }
  req.statusCode = 200
  res.end()
}