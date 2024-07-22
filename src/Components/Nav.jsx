import React from 'react'
import Header from './Header'

const Nav = () => {
  return (
    <>
    <div className="main">

<nav className="navbar navbar-expand-lg  ">

  <div className="container">
    <a className="navbar-brand fw-semibold py-3 ps-0 fs-3 text-white" href="#">

    <span className='text-white'>&lt;</span> <span className='two'>Hassan</span>
     <span className='three'>/&gt;</span>
    </a>
    <button
      className="navbar-toggler" text-white
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto py-3 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Contact
          </a>
        </li>
      </ul>
      <button className="nav-btn btn-outline px-5 fw-semibold "> Let's Talk</button>
    </div>
  </div>
</nav>


</div>
<Header/>
    </>
  )
}

export default Nav