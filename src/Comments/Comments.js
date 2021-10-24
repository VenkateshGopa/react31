import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import classes from './Comments.module.css';
const Comments = () =>{
    const[comment, setcomment] = useState([]);
    const params = useParams();
    useEffect(()=>{
        const fetchdata = async () => {
          const commentresponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}/comments`);
          if (!commentresponse.ok) throw new Error("could not fetch cart data");
          const commentdata = await commentresponse.json();
          setcomment(commentdata);
        };
        fetchdata();
      },[params]);
    return(
        <div className= {classes.main}>
          <p> Comments </p>
          <ul>
         {comment.map((ele) =><li className={classes.comment} key = {ele.id}><p className={classes.name}>{ele.name}</p><p className={classes.email}>{ele.email}</p> <p className={classes.body}>{ele.body}</p></li>)}
         </ul>
        </div>
    );
}
export default Comments;