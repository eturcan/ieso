import Ajv from 'ajv';
import { getSession } from 'next-auth/client'
import post from '../../schemas/post'
import { MongoClient } from 'mongodb'

const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);

const ajv = new Ajv()
const validate = ajv.compile(post)

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    let valid = validate(req.body.formData)
    if (!valid) res.status(422)
    else {
      await client.connect()
      const database = client.db("posts")
      const collection = database.collection("posts")
      await collection.insertOne({username:session.user.name, timestamp: Date.now(), ...req.body.formData})
      res.status(201)
    }
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}