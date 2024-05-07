//author , publish year , title, timestamps>.
import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String,require:true},
    publish_year:{type:Number,require:true},
},
{
    timestamps:true
}
)

export const book=new mongoose.model('kitaab',bookSchema);