import { MongoClient } from 'mongodb'
const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);

export default async (req, res) => {
  let page = req.body.page
  await client.connect()
  const database = client.db("posts")
  const collection = database.collection("posts")
  let posts = await collection.find({reviewed: true, public_private: "public"}).sort({timestamp: -1}).limit(10).skip(page * 10).toArray()
  req.statusCode = 200
  res.json({posts})
}