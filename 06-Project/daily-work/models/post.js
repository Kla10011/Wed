import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema(
    {
        work: String,
        status: String,
        name: String,
        timestart: Date,
        timend: Date,
    },
    {
        timestamps: true
    }
)
const Post = mongoose.models.Post || mongoose.model("Post",postSchema,"data");
export default Post;