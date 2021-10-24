import { useEffect } from "react";
import { useState } from "react";
import { Route, useParams} from "react-router";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import classes from './Postdetails.module.css';
import p1 from '../asserts/5.jpg';
const Postdetails = () => {
  const parms = useParams();
  const[post , setpost] = useState({});
  const[user, setuser] = useState({});
  useEffect(()=>{
    const fetchdata = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${+parms.postid}`);
      if (!response.ok) throw new Error("could not fetch post data");
      const data = await response.json();
      setpost(data);
      const userresponse = await fetch(`https://jsonplaceholder.typicode.com/users/${+data.userId}`);
      if (!userresponse.ok) throw new Error("could not fetch user data");
      const userdata = await userresponse.json();
      setuser(userdata);
    };
    fetchdata();
  },[parms.postid]);
  
  return (
    <div className={classes.postpage}>
      <img src={p1} alt='p1'/>
      <div className={classes.profile}>
        <div className={classes.first}>
        <i>{user.id}</i>
        <p>{user.name}</p>
        </div>
        <div className={classes.second}>
        <p><i className="fas fa-phone"> - </i> {user.username}</p>
        <p><i className="fa fa-user" aria-hidden="true"> - </i> {user.phone}</p>
        <p><i className="fas fa-envelope-square"> - </i> {user.email}</p>
        <p><i className="fa fa-globe" aria-hidden="true"> - </i> {user.website}</p>
        </div>
      </div>
      <div className={classes.post}>
      <p className={classes.title}>{post.title}</p>
      <p className={classes.ma}>{post.body}</p>
      </div>
      <Route path = '/posts/:postid' exact>
      <Link to={`/posts/${parms.postid}/comments`} className={classes.button} > Show Comments </Link>
      </Route>
      <Route path= {`/posts/:postid/comments`}>
        <Comments/>
      </Route>
    </div>
  );
};
export default Postdetails;
