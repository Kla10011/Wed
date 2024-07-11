import mongoose, { Schema } from 'mongoose';

const itemSchema = new Schema(
    {
        gg: String,
        title: String,
        img: String,
        content: String
    },
    {
        timestamps: true
    }
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema, 'item'); 
export default Item;