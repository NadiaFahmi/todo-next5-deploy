import { ConnectDB } from "@/lib/config/db";
// import { connectToDatabase } from "@/lib/config/db";
import { NextResponse } from "next/server";
import TodoModel from "@/lib/models/todoModel";




const LoadDB = async ()=>{
  await ConnectDB();
  // await connectToDatabase()
}

LoadDB();

// In your Next.js code
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

// ...


export async function POST(request){

  const {title, description} = await request.json();
  await TodoModel.create({
    title,
    description
  })
  
  return NextResponse.json({msg:"Todo Created"})
}

export async function GET(request){

  const todos = await TodoModel.find({});
  return NextResponse.json({todos:todos})
}

export async function DELETE(request){

  const mongoId = await request.nextUrl.searchParams.get('mongoId')

  await TodoModel.findByIdAndDelete(mongoId)
  return NextResponse.json({msg:"Todo Deleted"})
}


export async function PUT(request){

  const mongoId = await request.nextUrl.searchParams.get('mongoId')

  await TodoModel.findByIdAndUpdate(mongoId,{
    $set:{
      isCompleted:true
    }
  })
  return NextResponse.json({msg:"Todo Completed"})
}