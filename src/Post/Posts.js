import classes from './Posts.module.css';
import Post from "./Post";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { postactions } from '../Store/postSlice';
import p1 from '../asserts/2.jpg';
const Posts = () => {
  const posts = useSelector( state => state.post.posts);
  const dispatch= useDispatch();
  
  async function deletedata(id) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = posts.filter((post) => post.id !== id);
      dispatch(postactions.replaceposts({posts: post}));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className={classes.list}>
      <img src={p1} alt='p1'/>
      <Link to='/create-post' className= {`${classes.add}`} > + Add new Post</Link>
      <ul>
        {posts.map((ele) => (
          <li key={ele.id}><Post title={ele.title} body={ele.body} id={ele.id} to={`/posts/${ele.id}`} delete={deletedata}></Post></li> ))}
      </ul>
    </div>
  );
};
export default Posts;
