import { connectMongonDB } from "../../../../lib/mongodb";
import Post from "../../../../models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {work,status,name,timestart,timend,datetimerecord,datetimelatest} = await req.json()
    console.log(work,status,name,timestart,timend,datetimerecord,datetimelatest)
    await connectMongonDB();
    await Post.create({work,status,name})
    return NextResponse.json({message: "Post created"}, {status:201})
}