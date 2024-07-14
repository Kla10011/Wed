import { connectMongonDB } from "../../../../lib/mongodb";
import Post from "../../../../models/post";
import { NextResponse } from "next/server";


export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const timestart = searchParams.get('timestart');
    const timend = searchParams.get('timend');
    // console.log(timestart,timend)
    
    await connectMongonDB()
    const datestart = new Date(timestart);
    const datend = new Date(timend);
    datestart.setUTCHours(0, 0, 0, 0);
    datend.setUTCHours(23, 59, 59, 999);
    // console.log(datestart,datend)
    
    
    const posts = await Post.find({
        timestart: {$gte:datestart},
        timend:{$lte:datend}
    });
    // console.log(posts)
    return NextResponse.json({posts})
}

