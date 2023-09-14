import { connectDB } from '../database.js'
import ListItem from './ListItem.js'

export default async function List() {
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
}