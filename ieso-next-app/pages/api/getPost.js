import { MongoClient, ObjectID } from 'mongodb'
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017`;
const client = new MongoClient(uri);

export default async function getPost(req, res) {
  const { pid } = req.body
  await client.connect()
  const postsDb = client.db("posts")
  const postsCol = postsDb.collection("posts")
  let post = await postsCol.findOne({_id: ObjectID(pid)})
  const repliesCol = postsDb.collection("replies")
  let replies = await repliesCol.find({post_id: ObjectID(pid), reviewed: true}).toArray()
  console.log(replies)
  req.statusCode = 200
  res.json({post, replies})
}