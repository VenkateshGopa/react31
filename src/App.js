import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './Home/Dashboard';
import Users from './Users/Users';
import CreatePost from './CreatePost/CreatePost';
import Navigation from "./Navigation/Navigation";
import Posts from "./Post/Posts";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import {fetchCartdata} from './Store/postactions';
import Postdetails from "./Post/Postdetails";
import NotFound from "./NotFound";

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchCartdata());
  },[dispatch])
  return (
    <>
      <Navigation/>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Dashboard"/>
        </Route>
        <Route path="/Dashboard">
          <Dashboard/>
        </Route>
        <Route path="/users" exact>
          <Users/>
        </Route>
        <Route path="/create-post">
          <CreatePost/>
        </Route>
        <Route path="/posts" exact>
          <Posts/>
        </Route>
        <Route path="/posts/:postid">
          <Postdetails/>
        </Route>
        <Route path="*">
          {/* <Redirect to='/Dashboard'/> */}
          <NotFound/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
