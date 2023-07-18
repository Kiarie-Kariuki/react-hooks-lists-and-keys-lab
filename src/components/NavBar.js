import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return  <nav className="navbar">  
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>;
}

export default NavBar;
