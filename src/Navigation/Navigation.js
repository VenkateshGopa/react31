import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
const Navigation = () => {
  return (
    <nav className={`${classes.nav} sticky-top`}>
      <ul>
      <p className={classes.brand}>json place holder</p>
      </ul>
      <ul>
        <li><NavLink to="/Dashboard" activeClassName={classes.active}>Dashboard</NavLink></li>
        <li><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></li>
        <li><NavLink to="/create-post" activeClassName={classes.active}>CreatePost</NavLink></li>
        <li><NavLink to="/posts" activeClassName={classes.active}>Posts</NavLink></li>
      </ul>
    </nav>
  );
};
export default Navigation;
