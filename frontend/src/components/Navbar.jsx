import React from 'react'
import { useNavigate } from 'react-router-dom'



function Navbar() {
  const navigate=useNavigate()
  return (
    <div className="app">
  
    <nav className="navbar navbar-expand-lg bg-primary navbar-light ">
  <div className="container-fluid">
    <h1  onClick={()=>navigate("/")} className="navbar-brand"  >BOOKS LİBRARY</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <h1 className="nav-link active" aria-current="page" >Books</h1>
        </li>
        <li className="nav-item">
          <h1 to="addbook" className="nav-link active" href="#">Add Books</h1>
        </li>
        
   
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>

  )
}

export default Navbar