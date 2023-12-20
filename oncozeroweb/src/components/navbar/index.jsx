import IconMain from "../../assets/logo512.png";
import "./index.css";

export const Navbar = () => {
  return (
    <nav className="navbar flex ">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="logo">
            <img src={IconMain} alt="Logo" className="logo-img" />
          </a>
        </div>
        <div className="navbar-menu">
          <ul className="menu">
            <li>
              <a href="#" className="font-bold text-lg">
                Главная
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-lg">
                Проблема
              </a>
            </li>
            <li>
              <a href="/scans" className="font-bold text-lg">
                Решение
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-lg">
                Команда
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
