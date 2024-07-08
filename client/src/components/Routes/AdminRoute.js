// import { useState,useEffect } from "react";
// import { useAuth } from "../../context/auth";
// import { useData } from "../../context/data";
// import { Outlet } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../Spinner";

// export default function AdminRouter(){
//     const[ok,setOk]=useState(false);
//     //eslint-disable-next-line
//     const[auth,setAuth]=useAuth();
//     const { data, loading, error } = useData();

// useEffect(()=>{
//     const authCheck=async()=>{
//         const res=await axios.get('/api/v1/auth/admin-auth');
        
//         if(res.data.ok){
//             setOk(true)
//         }else{
//             setOk(false)
//         }
//     };
//     if(auth?.token)authCheck();
// },[auth?.token]);

// return ok ? <Outlet/> : <Spinner path=" " />;
// }

import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
// import { useData } from "../../context/data"; // Import the useData hook
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRouter() {
  const [ok, setOk] = useState(false);
  //eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  // const { data, loading, error } = useData(); // Use the useData hook to get the data from the context

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/admin-auth");

      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return (
    <>
      {ok ? (
        <Outlet />
      ) : (
        <Spinner path=" " />
      )}
    </>
  );
}
