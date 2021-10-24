import { Link } from 'react-router-dom';
import classes from './Post.module.css';
const Post = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.body}>
        <p className={classes.title}>
          {props.title}
        </p>
        <p className={classes.message}>
         {props.body}
        </p>
      </div>
      <div className={classes.buttons}>
          <Link to = {props.to}><i className="far fa-eye fa-2x"></i></Link>
          <i onClick ={ ()=> props.delete(props.id)} className={`fas fa-trash-alt fa-2x ${classes.delete}`}></i>
      </div>
    </div>
  );
};
export default Post;
