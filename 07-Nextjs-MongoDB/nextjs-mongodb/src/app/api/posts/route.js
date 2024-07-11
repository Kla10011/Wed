import { connectMongonDB } from "../../../../lib/mongodb";
import Post from "../../../../models/post";
import Item from "../../../../models/item";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, img, content , gg} = await req.json();
    console.log(title, img, content , gg)
    await connectMongonDB();
    await Post.create({title, img,content})
    await Item.create({gg,title, img,content})
    return NextResponse.json({message: "Post created"}, {status:201})
}

export async function GET() {
    await connectMongonDB()
    const posts = await Post.find({})
    return NextResponse.json({posts})
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id")
    await connectMongonDB()
    await connectMongonDB()
    await Post.findByIdAndDelete(id)
    return NextResponse.json({messaage : "Post deleted"}, {status:200})
}
