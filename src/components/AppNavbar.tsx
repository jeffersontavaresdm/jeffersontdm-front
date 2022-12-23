import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Nav className="me-auto" style={{fontSize: "24px"}}>
          <Nav.Link href="/" style={{color: "violet"}}>Home</Nav.Link>
          <Nav.Link href="/all" style={{color: "violet"}}>All</Nav.Link>
          {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{fontSize: "20px",}}>*/}
          {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
          {/*  <NavDropdown.Item href="#action/3.2">*/}
          {/*    Another action*/}
          {/*  </NavDropdown.Item>*/}
          {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
          {/*  <NavDropdown.Divider/>*/}
          {/*  <NavDropdown.Item href="#action/3.4">*/}
          {/*    Separated link*/}
          {/*  </NavDropdown.Item>*/}
          {/*</NavDropdown>*/}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

// const Navbar = ({history}) => {
//   const isAuth = !!localStorage.getItem("token");
//   const [isOpen, setOpen] = useState(false);
//
//   const loginUser = () => {
//     localStorage.setItem("token", "some-login-token");
//     history.push("/profile/Vijit");
//   };
//
//   const logoutUser = () => {
//     localStorage.removeItem("token");
//     history.push("/");
//   };
//
//   return (
//     <nav
//       className="navbar is-primary"
//       role="navigation"
//       aria-label="main navigation"
//     >
//       <div className="container">
//         <div className="navbar-brand">
//           <a
//             role="button"
//             className={`navbar-burger burger ${isOpen && "is-active"}`}
//             aria-label="menu"
//             aria-expanded="false"
//             onClick={() => setOpen(!isOpen)}
//           >
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </a>
//         </div>
//
//         <div className={`navbar-menu ${isOpen && "is-active"}`}>
//           <div className="navbar-start">
//             <NavLink className="navbar-item" activeClassName="is-active" to="/">
//               Página Principal
//             </NavLink>
//
//             <NavLink
//               className="navbar-item"
//               activeClassName="is-active"
//               to="/about"
//             >
//               Sobre
//             </NavLink>
//
//             <NavLink
//               className="navbar-item"
//               activeClassName="is-active"
//               to="/profile"
//             >
//               Perfil
//             </NavLink>
//           </div>
//
//           <div className="navbar-end">
//             <div className="navbar-item">
//               <div className="buttons">
//                 {!isAuth ? (
//                   <button className="button is-white" onClick={loginUser}>
//                     Login
//                   </button>
//                 ) : (
//                   <button className="button is-black" onClick={logoutUser}>
//                     Logout
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;