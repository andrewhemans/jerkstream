import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/jerk-text.svg"

const Header = () => (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <Link to="/">
        <img src={logo} height="52" alt="logo" />
        </Link>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
