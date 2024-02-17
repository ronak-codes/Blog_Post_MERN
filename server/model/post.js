
import mongoose from "mongoose"

export const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        // required:true,
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:String,
        required:true,
    },
    createdDate:{
        type:Date,
        required:true
    }
})

const post = mongoose.model('post',postSchema);

export default post;