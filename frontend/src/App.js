import { useEffect, useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    bookName: "",
    author: "",
    quantity: "",
    department: "",
    // publisher:"",
    comments: "",
  });
  useEffect(() => {
    fetch("/books")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBooks(jsonRes));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setBook((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookName: book.bookName,
      author: book.author,
      department: book.department,
      publisher: book.publisher,
      comments: book.comments,
    };
    //backende veri gönderdik newbook backendeki server.js bizim url
    axios.post("/newbook", newBook);
    alert(`The Book ${book.bookName} is added. `);
    // form kaydettikten sonra form içi boşalsın diye
    setBook({
      bookName: "",
      author: "",
      department: "",
      publisher: "",
      comments: "",
    });
  };
  // delete işlemi
  const deleteBook = (id) => {
    axios.delete("/delete/" + id);
    alert(`The Book with id ${id} is deleted `);
  };
  // update işlemi
  const lendBook = (id) => {
    axios.put("/lend/" + id);
    alert(`The Book with id ${id} is lended `);
  };
  // update işlemi
  const backBook = (id) => {
    axios.put("/back/" + id);
    alert(`The Book with id ${id} is back `);
  };

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg bg-primary navbar-light ">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              BOOKS LİBRARY
            </Link>
            <button
              className="navbar-toggler"
              type="button"
             
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addbook" className="nav-link active" >
                    Add Books
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-3  "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success bg-black me-5" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
   <Switch>
          <Route exact path="/">
            <Books
              books={books}
              deleteBook={deleteBook}
              lendBook={lendBook}
              backBook={backBook}
            />
          </Route>
          <Route path="/addbook">
            <AddBook
              book={book}
              addBook={addBook}
              handleChange={handleChange}
            />
          </Route>
          </Switch> 
      </Router>
    </div>
  );
}

export default App;
