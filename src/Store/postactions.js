import {postactions} from './postSlice';
export const fetchCartdata = () => {
  return async (dispatch) => {
    const posturl= "https://jsonplaceholder.typicode.com/posts" 
    const userurl= "https://jsonplaceholder.typicode.com/users"
    const fetchdata = async (url) => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("could not fetch cart data");
      const data = await response.json();
      return data;
    };
    try {
      const postData = await fetchdata(posturl);
      dispatch(postactions.replaceposts({posts: postData}));
      const usersData = await fetchdata(userurl);
      dispatch(postactions.replaceusers({users: usersData}));
    } catch {
      console.log("could not fetch cart data");
    }
  };
};
