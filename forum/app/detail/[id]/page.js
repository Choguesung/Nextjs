import { connectDB } from "@/app/database"
import { ObjectId } from "mongodb"
import Comment from "./comment"


export default async function Detail(props) {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})

    return (
      <div>
        <h4>글 상세 정보</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
        <Comment _id={ result._id.toString()}/>
      </div>
    )
  }