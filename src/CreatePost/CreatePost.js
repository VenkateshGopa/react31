import React, { useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useDispatch, useSelector } from "react-redux";
import { postactions } from "../Store/postSlice";
import { Redirect } from "react-router";
import classes from './CreatePost.module.css';
import p1 from '../asserts/3.jpg';
const CreatePost = () => {
  const [state, setstate] = useState({ userId: "1", title: "", body: "" , flag:false});
  const users = useSelector(state => state.post.users);
  const posts = useSelector(state => state.post.posts);
  const dispatch = useDispatch();

  async function create() {
    try {
      const { userId, title, body } = state;
      const { data } = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        { userId, title, body }
      );
      const post = [...posts, data];
      dispatch(postactions.replaceposts({posts: post}));
    } catch (err) {
      console.error(err);
    }
  }

  function submithandler(event) {
    event.preventDefault();
    console.log(state);
    create();
    setstate({ userId: "1", title: "", body: "" , flag:true });
  }

  const changehandle = ({ target: { name, value } }) => {
    setstate({ ...state, [name]: value });
  };

  return (
    <div className={`py-2 ${classes.main}`}>
      <img src={p1} alt='p1'/>
        <div className={`col-8 col-sm-4 col-lg-3 mx-2 p-4 rounded ${classes.body}`}>
          <label> User </label>
          <select className="form-control form-control-sm form-select mb-2"value={state.userId}onChange={changehandle} name="userId">
            {users.map((ele) => (<option key={ele.id} value={ele.id}>{ele.name}</option>))}
          </select>
          <label> Title </label>
          <input className="form-control form-control-sm  mb-2" name="title" value={state.title} onChange={changehandle} />
          <label> Body </label>
          <input className="form-control form-control-sm  " name="body" value={state.body}onChange={changehandle}/>
          <br/>
          <button className=" btn btn-primary" onClick={submithandler}>Submit</button>
        </div>
        {state.flag && <Redirect to='/posts'/>}
    </div>
  );
};
export default CreatePost;
