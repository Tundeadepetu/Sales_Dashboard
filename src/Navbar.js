import logo from "./Resources/Frame.png"
import layout from "./Resources/layout.png"

const NavBar = () => {
  return (
    <nav className="navbar leftnav">
      <img src= {logo} alt="logo" className="Logo"/>
      <div className="home">
      </div>
      <img src= {layout} alt= "layout" className="lay" />
    </nav>
  );
};

export default NavBar;
