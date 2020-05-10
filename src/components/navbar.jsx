import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Very Real Online Store{" "}
          <FontAwesomeIcon className="ml-5" icon={faShoppingCart} /> Cart
          <span className="badge badge-pill badge-secondary ml-2">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;

// How to duplicate this component as a stateless functional component

// const NavBar = (props) => {
//       return (
//         <nav className="navbar navbar-light bg-light">
//           <a className="navbar-brand">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </nav>
//       );
//     }
//   }

//   export default NavBar;
