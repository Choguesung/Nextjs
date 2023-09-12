import { connectDB } from "@/app/database"
import { ObjectId } from "mongodb"


export default async function Detail(props) {
    const db = (await connectDB).db("todoapp")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})

    return (
      <div>
        <h4>글 상세 정보</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
      </div>
    )
  }