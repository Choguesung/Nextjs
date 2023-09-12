import { connectDB } from "./database";

export default async function Home() {
  let client = await connectDB;
  const db = client.db('todoapp');
  let result = await db.collection('post').find().toArray();

  return (
    <main>
      {result[0].content}
    </main>
  )
}