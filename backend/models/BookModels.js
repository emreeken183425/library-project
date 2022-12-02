const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        unique: false
        
        
    },
    author:{
        type:String,
        
    },
    department:{
        type:String,
        
    },
    publisher:{
        type:String,
       
    },
    comments:{
        type:String
    }
},{timestamps:true})//timestamps:true veri tarihinin oluşturulmasını gösterir

module.exports=mongoose.model("BookStore",bookSchema);