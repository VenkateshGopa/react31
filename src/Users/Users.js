import { useSelector } from "react-redux";
import p1 from '../asserts/4.jpg';
import classes from "./Users.module.css";
const Users = () => {
  const users = useSelector((state) => state.post.users);
  return (
    <div className={classes.top}>
      <img src={p1} alt='p1'/>
      <h2>Users</h2>
      <ul type="none">
        {users.map((ele) => (
          <li key={ele.id}>
            <div className={classes.profile}>
              <div className={classes.first}>
                <i>{ele.id}</i>
              </div>
              <div className={classes.second}>
                <p>{ele.name}</p>
                <p><i className="fas fa-phone"> - </i> {ele.username}</p>
                <p><i className="fa fa-user" aria-hidden="true"> - </i> {ele.phone}</p>
                <p><i className="fas fa-envelope-square"> - </i> {ele.email}</p>
                <p><i className="fa fa-globe" aria-hidden="true"> - </i>{ele.website}</p>
                {/* <Link to={`/edit-user/${ele.id}`}>Edit User</Link> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
