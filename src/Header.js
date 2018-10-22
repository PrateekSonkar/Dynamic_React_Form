import React from "react";

const Header = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Canni AI
        </a>
        <ul className="right">
          <li>
            <a href="/">View</a>
          </li>
          <li>
            <a href="/abc">Add Form</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
