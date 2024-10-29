import logo from "../../images/logo.png";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.container}>
      <img src={logo} alt="logo" />
      <nav>
        <ul className={css.navBar}>
          <li>
            <a href="#">Invest</a>
          </li>
          <li>
            <a href="#">Cash</a>
          </li>
          <li>
            <a href="#">Borrow</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className={css.btnList}>
          <li>
            <button className={css.btnLog} type="button">
              Log in
            </button>
          </li>
          <li>
            <button className={css.btnStart} type="button">
              Get started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;