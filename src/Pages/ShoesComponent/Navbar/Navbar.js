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
					<li><Link to={"/"}  >Home</Link></li>
					<li><Link to={"/men"}>Men</Link></li>
					<li><Link>Woman</Link></li>
					<li><Link>Kids</Link></li>
					<li><Link>Sale</Link></li>
				</ul>
			</nav>
		</div>
	</header>
    </>
  )
}

export default Navbar