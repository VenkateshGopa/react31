import{useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import classes from './Dashboard.module.css';
import p1 from '../asserts/1.jpg';
const Dashboard = () => {
  const users = useSelector( state => state.post.users);
  const posts = useSelector( state => state.post.posts);
  return (
    <div className={classes.main}>
      <img src={p1} alt='p1'/>
      <Link to='/posts'>
      <div className={classes.posts}>
        <div className={classes.first}>
        <p> Total Number of Posts:</p>
        <p>{posts.length}</p>
        </div>
        <i className="fas fa-sticky-note"></i>
      </div>
      </Link>
      <Link to='/users'>
      <div className={classes.users}>
        <div className={classes.first}>
        <p>Total Number of Users:</p>
        <p>{users.length}</p>
        </div>
        <i className="fa fa-user" aria-hidden="true"></i>
      </div>
      </Link>
    </div>
  );
};
export default Dashboard;
