import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/jerk-text.svg"

const Header = () => (
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
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
