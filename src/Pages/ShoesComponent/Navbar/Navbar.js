import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
	
  return (
    <>
      <header>
		<div className="navcontainer">
        <Link className="link" to={"/"}> <h1>Shoe Store</h1> </Link>
			<nav>
				<ul>
					<li><Link className="link" to={"/"}  >Home</Link></li>
					<li><Link className="link" to={"/men"}>Men</Link></li>
					<li><Link className="link" to={"/men"} >Woman</Link></li>
					<li><Link className="link" to={"/men"} >Kids</Link></li>
					<li><Link className="link" to={"/men"} >Sale</Link></li>
				</ul>
			</nav>
		</div>
	</header>
    </>
  )
}

export default Navbar