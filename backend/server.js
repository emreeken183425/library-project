const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const path=require('path')
const BookStore=require('./models/BookModels')
const app=express();

app.use(bodyParser.json());// body-parser requestleri parçalamak için
app.use(cors());// cors farklı port lara girmemizi sağlar


//MONGOOSE CONNECTİON

mongoose.connect('mongodb+srv://emreeken1834:Erzurum25!@cluster0.weh8m1n.mongodb.net/books?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
   }).then(console.log("connected to database"))
    .catch((err)=>{
        console.log("hata oluştu",err);
    })

// post ile databae gönderdiğimiz verileri get ile çağırdık
app.get('/books',(req,res)=>{
    BookStore.find().then(books =>res.json(books))
})


// post işlemi
app.post('/newbook',async (req,res)=>{
    try {
       const newBook=new BookStore({
        bookName:req.body.bookName,
        author:req.body.author,
        quantity:req.body.quantity,
        department:req.body.department,
        publisher:req.body.publisher,
        comments:req.body.comments

       }) 

      const book= await newBook.save();// database kaydetmek için
      res.status(200).json(book)// database bakamadığımız durumlarda görmek için


    } catch (err) {
        console.log(err);
    }
} )


app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    BookStore.findByIdAndDelete({_id:id},(err)=>{
        if(!err){

            console.log("Book Deleted");
        }else{
            console.log(err);
        }
    })
})




app.listen(5000,()=>{
    console.log('server çalıştı');
})
