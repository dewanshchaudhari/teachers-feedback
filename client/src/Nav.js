/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

function Nav() {
    const [toggle, setToggle] = useState(false);
    let toggleDiv = () => {
        setToggle(!toggle);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/home">Teachers FeedBack</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleDiv}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/results">Results
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav


// <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarColor01">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home
//           <span class="sr-only">(current)</span>
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//     </ul>
//   </div>
// </nav>