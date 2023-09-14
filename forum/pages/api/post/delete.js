import { connectDB } from "@/app/database";
import { ObjectId } from "mongodb";


export default async function handler(요청, 응답) {
    if (요청.method == 'DELETE'){
        try {
          const db = (await connectDB).db('forum')
          let result = await db.collection('post').deleteOne({_id : new ObjectId(요청.body._id)});
        } 
        catch (error) {
          응답.status(500)
        }
    }
  }