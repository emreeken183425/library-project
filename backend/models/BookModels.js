const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    publisher:{
        type:String,
       
    },
    comments:{
        type:String
    }
},{timestamps:true})//timestamps:true veri tarihinin oluşturulmasını gösterir

module.exports=mongoose.model("BookStore",bookSchema);