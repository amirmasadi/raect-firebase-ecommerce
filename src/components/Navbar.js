import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useStateValue } from "../StateProvider/StateProvider";

const Navstyle = styled.nav`
  background-color: #161a1d50;
  backdrop-filter: blur(10px);

  svg {
    width: 25px;
    color: var(--white);

    &:hover {
      color: var(--blue2);
    }
  }
  .cart {
    position: relative;
  }
  small {
    font-size: 0.8rem;
    background-color: var(--blue);
    padding: 1px 6px 1px 7px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 0px;
  }
  .navbar-nav {
    align-items: center;
  }
  .dropdown-menu-dark {
    border: none;
    background-color: #ffffff50;
    backdrop-filter: blur(10px);
  }
  .dropdown-item {
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    .my-drop-down {
      display: block;
    }
  }
`;

const navMotion = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function Navbar() {
  const [{ basket }] = useStateValue();
  const category = ["دسته 3", "دسته 2", "دسته 1"];
  return (
    <Navstyle className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <motion.div
            className="navbar-nav text-light"
            variants={navMotion}
            initial="initial"
            animate="animate"
          >
            <NavLink className="nav-link px-lg-5 lead " exact to="/">
              خانه
            </NavLink>
            <div
              className="collapse navbar-collapse my-drop-down"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle px-lg-5 lead "
                    to="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    محصولات
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/Projects">
                        همه
                      </Link>
                    </li>
                    {category.map((cat, index) => (
                      <li key={index}>
                        <Link className="dropdown-item" to={"/product/" + cat}>
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <NavLink className="nav-link px-lg-5 lead" to="/About">
              درباره
            </NavLink>
            <NavLink className="nav-link px-lg-5 lead" to="/Contact">
              تماس
            </NavLink>
            <NavLink className="nav-link px-lg-5 lead" to="/admin-panel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
            <NavLink className="nav-link px-lg-5 lead cart" to="/cart">
              <small>{basket?.length}</small>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </Navstyle>
  );
}

export default Navbar;
