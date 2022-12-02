import React from "react";

function AddBook({book,handleChange,addBook}) {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary ">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              // value={book.bookName}
              onChange={handleChange}
              name="bookName"
              className="form-control"
              id="floatingInput"
              placeholder="bookname"
            />
            <label htmlFor="floatingInput">Book Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              //value={book.author}
              onChange={handleChange}
              name="author"
              className="form-control"
              id="floatingInput"
              placeholder="author"
            />
            <label htmlFor="floatingInput">Author</label>
          </div>
          {/* <div className="form-floating mb-3">
            <input
              type="text"
             // value={book.publisher}
              onChange={handleChange}
              name="publisher"
              className="form-control"
              id="floatingInput"
              placeholder="publisher"
            />
            <label htmlFor="floatingInput">Publisher</label>
          </div> */}
          <div className="form-floating mb-3">
          <input
              type="text"
              
              onChange={handleChange}
              name="department"
              className="form-control"
              id="floatingInput"
              placeholder="department"
            />
            <label htmlFor="floatingSelect"> Department</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
             //value={book.publisher}
              onChange={handleChange}
              name="quantity"
              className="form-control"
              id="floatingInput"
              placeholder="quantity"
            />
            <label htmlFor="floatingInput">Quantity</label>
          </div>
          <div className="form-floatingmb-3">
          <label htmlFor="floatingTextarea2">Comments</label>
            <textarea
              className="form-control"
            //  value={book.comments}
              onChange={handleChange}
              name="comments"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{height: "25px"}}
            >
            </textarea>
            
          </div>
          <button type="button" onClick={addBook} className="btn btn-primary mb-3">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
