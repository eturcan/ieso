import { MongoClient, ObjectID } from 'mongodb'
import { getSession } from 'next-auth/client'
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017`;
const client = new MongoClient(uri);

export default async function review(req, res) {
  const session = await getSession({ req })
  if (!session) {
    res.status(401)
    res.end()
    return
  }
  await client.connect()
  const accountsDb = client.db("accounts")
  const usersCol = accountsDb.collection("users")
  let user = await usersCol.findOne({username: session.user.name})
  if (user.moderator !== true) {
    res.status(401)
    res.end()
    return
  }
  const postsDb = client.db("posts")
  const { _id, type, approve, username, message } = req.body
  if (!_id || !type) {
    res.status(406)
    res.end()
    return
  }
  if (type === "post") {
    const postsCol = postsDb.collection("posts")
    const messCol = postsDb.collection("messages")
    if (approve) {
      await postsCol.updateOne({_id: ObjectID(_id)}, {$set: { reviewed: true}})
      await messCol.insertOne({username, id: ObjectID(_id), approved: true, type: "post", message, from: session.user.name})
    }
    else {
      await postsCol.deleteOne({_id: ObjectID(_id)})
      await messCol.insertOne({username, id: ObjectID(_id), approved: false, type: "post", message, from: session.user.name})
    }
  } else if (type === "reply") {
    const repliesCol = postsDb.collection("replies")
    if (approve) {
      await repliesCol.updateOne({_id: ObjectID(_id)}, {$set: { reviewed: true}})
      await messCol.insertOne({username, id: ObjectID(_id), approved: true, type: "reply", message, from: session.user.name})
    }
    else {
      await repliesCol.deleteOne({_id: ObjectID(_id)})
      await messCol.insertOne({username, id: ObjectID(_id), approved: false, type: "reply", message, from: session.user.name})
    }
  }
  req.statusCode = 200
  res.end()
}