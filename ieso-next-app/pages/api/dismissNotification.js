import { MongoClient, ObjectID } from 'mongodb'
import { getSession } from 'next-auth/client'
const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);

export default async function dismissNotification(req, res) {
  const session = await getSession({ req })
  await client.connect()
  const database = client.db("posts")
  const noti = database.collection("notifications")
  let {id} = req.body
  if (session && session?.user?.name) {
    await noti.deleteOne({_id: ObjectID(id), username: session.user.name})
  }
  else {
    res.status(401)
    res.end()
    return
  }
  req.statusCode = 200
  res.json({notifications})
}