import { MongoClient } from 'mongodb'
import { getSession } from 'next-auth/client'
const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);

export default async (req, res) => {
  const session = await getSession({ req })
  if (!session || !session?.user?.name) {
    res.status(401)
    res.end()
    return
  }
  await client.connect()
  const accountsDb = client.db("accounts")
  const usersCol = accountsDb.collection("users")
  let user = await usersCol.findOne({username: session?.user?.name})
  if (user.moderator !== true) {
    res.status(401)
    res.end()
    return
  }
  req.statusCode = 200
  res.end()
}