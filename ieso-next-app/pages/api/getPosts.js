import { MongoClient } from 'mongodb'
import { getSession } from 'next-auth/client'
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017`;
const client = new MongoClient(uri);

export default async function getPosts(req, res) {
  const session = await getSession({ req })
  let page = req.body.page
  await client.connect()
  const database = client.db("posts")
  const collection = database.collection("posts")
  let posts;
  if (!session || !session?.user?.name) {
    posts = await collection.find({ $or: [{reviewed: true, public_private: "public"}]}).sort({timestamp: -1}).limit(10).skip(page * 10).toArray()
  }
  else posts = await collection.find({ $or: [{reviewed: true, public_private: "public"}, {username: session.user.name}]}).sort({timestamp: -1}).limit(10).skip(page * 10).toArray()
  req.statusCode = 200
  res.json({posts})
}