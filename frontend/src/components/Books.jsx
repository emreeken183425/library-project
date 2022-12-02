import React from 'react'

function Books({books,deleteBook,lendBook,backBook}) {
  return (
    <div className='container mt-5' >
       <table className='table table-hover table-dark w-100' >
        <thead  >
            <tr>
            <th scope='col' >ID</th>
            <th scope='col' >Book Name</th>
            <th scope='col' >Author</th>
            <th scope='col' >Department</th>
            <th scope='col' >Comments</th>
            <th scope='col'>Process</th>
            </tr>
        </thead>
        <tbody>
          {
            books.map((book,index)=>{
          return(
            <tr  key={index} > 
            <td>{book._id} </td>           
            <td data-toogle="tooltip"
             data-placement="top"
              title={book.comments} >
              {book.bookName} </td>             
            <td>{book.author} </td>             
                       
            <td>{book.department} </td>             
                         
            <td>{book.comments} </td>             
<td><button onClick={()=>deleteBook(book._id)}  className='btn btn-danger' >DELETE</button> </td>
<td><button onClick={()=>lendBook(book._id)} className='btn btn-danger' >LEND</button> </td>
<td><button onClick={()=>backBook(book._id)} className='btn btn-danger' >BACK</button> </td>

            </tr>
          )
            })
          }
        </tbody>
        </table> 
    </div>
  )
}

export default Books