import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    let[searchVal ,setSearchVal] = useState("");
  

    return ( 
        <nav>
           <Link to={"/"} > <h1>Animation App</h1></Link>
            <input type="search" value={searchVal} onChange={(e)=>{setSearchVal(e.target.value)}}/>
            <Link to={`/search${searchVal}`}>  <button>search</button></Link>
        </nav>
     );
}
 
export default Nav;
