import { connectDB } from "../database.js";
import Link from "next/link.js";


export default async function List() {
    let db = (await connectDB).db('todoapp');
    let result = await db.collection('post').find().toArray();

    return (
        <div className="list-bg">
      { result.map((a,i)=>
        <div className="list-item" key={i}>
          <Link href={'/detail/' + result[i]._id}><h4>{a.title}</h4></Link>
          <p>{result[i].content}</p>
        </div>
      ) }
    </div>
    )
}