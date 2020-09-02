import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import bcrypt from 'bcrypt'
import { MongoClient } from 'mongodb'

const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);
const SALT_ROUNDS = 12

const signIn = async ({username, password}) => {
  await client.connect()
  const database = client.db("accounts")
  const collection = database.collection("users")

  const query = { username: username }

  let found = await collection.findOne(query)
  if (!found) return Promise.reject('/auth/signin?error=CredentialsSignin')

  let compare = await bcrypt.compare(password, found.hash)
  if (!compare) return Promise.reject('/auth/signin?error=CredentialsSignin')

  return Promise.resolve({ name: username })
}

const register = async ({username, password}) => {
  await client.connect()
  const database = client.db("accounts")
  const collection = database.collection("users")

  let hash = await bcrypt.hash(password, SALT_ROUNDS)

  const user = { username, hash }

  try {
    await collection.insertOne(user)
    return Promise.resolve({ name: username })
  } catch (e) {
    console.log(e)
    return Promise.reject('/auth/register?error=CredentialsSignin')
  }
}

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        register: { label: "Register", type: "checkbox" }
      },
      authorize: async credentials => {
        if (credentials.register === "true") return register(credentials)
        else return signIn(credentials)
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
}

export default (req, res) => NextAuth(req, res, options)