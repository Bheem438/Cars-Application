import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/FavoritesContext";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritsCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div  className={classes.logo}>Car Dheko</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newcars">Add New Cars</Link>
            </li>
            <li>
              <Link to="/favorites">My Favorites <span className={classes.badge}>{favoritsCtx.totalFavorites}</span></Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default MainNavigation;
