import "../views/NavHeader.scss";

const NavHeader = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <a href="/detail">Detail</a>
      <a href="/check">Gay check</a>
      <a href="/clock">Clock</a>
    </div>
  );
};

export default NavHeader;
