import { MongoClient } from 'mongodb'
import { getSession } from 'next-auth/client'
const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);

export default async function getUnreviewed(req, res) {
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
  const postsCol = postsDb.collection("posts")
  let posts = await postsCol.find({reviewed: false}).toArray()
  const repliesCol = postsDb.collection("replies")
  let replies = await repliesCol.aggregate([
    { 
      $match: {reviewed: false}
    },
    {
      $lookup:
      {
        from: "posts",
        localField: "post_id",
        foreignField: "_id",
        as: "post"
      }
    }
  ]).toArray()
  req.statusCode = 200
  res.json({posts, replies})
}