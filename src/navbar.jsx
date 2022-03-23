import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {

  return (

<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-50" >
  <Link className="navbar-brand" to = "">React-Router-Project</Link>

  <div>
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to ='/'>Home <span className="sr-only">(current)</span>
      </Link>
      <Link className="nav-item nav-link" to ='/Students'>Students' Info</Link>
      <Link className="nav-item nav-link" to ='/Employee'>Employee' Info</Link>
     
    </div>
  </div>
</nav>
 
</>

  )
}


export default NavBar;