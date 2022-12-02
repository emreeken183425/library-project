
import { useEffect, useState } from 'react';
import './App.css';
import AddBook from './pages/AddBook';
import Books from './pages/Books';
import Navbar from './components/Navbar';
import axios from "axios"


function App() {

  const [books, setBooks] = useState([])
const [book, setBook] = useState({
  bookName:"",
  author:"",
  quantity:"",
  department:"",
  // publisher:"",
  comments:""
})
  useEffect(() => {
    fetch('/books').then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setBooks(jsonRes))
  
  }, [])
  
const handleChange=(e)=>{
  const{name,value}=e.target.value;
  setBook(prevInput=>{
    return(
      {
        ...prevInput,
        [name]:value
      }
    )
  })
}

const addBook=(e)=>{
  e.preventDefault();
  const newBook={
    bookName:book.bookName,
    author:book.author,
    publisher:book.publisher,
    department:book.department,
    quantity:book.quantity,
    comments:book.comments
  }
  //backende veri gönderdik newbook backendeki server.js bizim url
  axios.post("/newbook",newBook)
  alert(`The Book ${book.bookName} is added. `)
  // form kaydettikten sonra form içi boşalsın diye
  setBook({
  bookName:"", 
  author:"",
  quantity:"",
  department:"",
  publisher:"",
  comments:""})
}
// delete işlemi
const deleteBook=(id)=>{
axios.delete('/delete/'+id);
alert(`The Book with id ${id} is deleted `)
}  
// update işlemi
const lendBook=(id)=>{
  axios.put('/lend/'+id);
  alert(`The Book with id ${id} is lended `)
  } 
// update işlemi
const backBook=(id)=>{ 
    axios.put('/back/'+id);
    alert(`The Book with id ${id} is back `)
    } 

return (
    <div className="App">
     <Navbar />
     <Books books={books}
     deleteBook={deleteBook}
     lendBook={lendBook}
     backBook={backBook}
     />
     <AddBook
       book={book}
       addBook={addBook} 
       handleChange={handleChange} 
       />
    </div>
  );
}

export default App;
