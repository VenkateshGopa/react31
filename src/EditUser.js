// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
// import axios from "axios";
// const EditUser = () =>{
//     const [user, setuser]= useState({});
//     const users = useSelector(state => state.post.users);
//     const params = useParams();
//     const data = users.find( ele => +ele.id === +params.userid);
//     console.log(data);
//    useEffect(() =>{
//     async function fetchdata() {
//         try {
//           const { data } = await axios.get(
//             `https://jsonplaceholder.typicode.com/users/${params.userid}`
//           );
//           setuser(data);
//         } catch (err) {
//           return <p>{err}</p>
//         }
//       }
//       fetchdata();
//    },[params.userid]);
//     return(
//         <form>
//             <input value={user.id}/>
//             <input value={user.name}/>
//             <input value={user.username}/>
//             <input value={user.email}/>
//             <hr/>
//             <input value={user.phone}/>
//             <input value={user.website}/>
//         </form>  
//     );
// }
// export default EditUser;

// https://images.unsplash.com/photo-1544945582-3b466d874eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjMzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60  postdetails


// https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60  posts

// https://images.unsplash.com/photo-1542261777448-23d2a287091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60   dashboard


// https://images.unsplash.com/photo-1527086983597-b4d44c4a66d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60  user


// https://images.unsplash.com/photo-1543187018-21e461e7538e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60

// https://images.unsplash.com/photo-1544627836-822bfe450209?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjI1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60
