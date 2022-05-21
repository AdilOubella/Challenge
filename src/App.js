import React, { useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyle } from './globalStyle';
import Header from './Components/Header';
import UserList from './Components/UserList';
import { getUsersFetch } from './features/userSlice';

const App = () =>  {
  const [page, setPage] = useState(0)


  
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersData.users);

  useEffect(() => {
    console.log("How many time called");
    dispatch(getUsersFetch(page))
  },[page,dispatch])


  console.log("Check the users => ",users);


  const handleScroll = (e) => {
    if( window.innerHeight + e.target.documentElement.scrollTop +1 >= e.target.documentElement.scrollHeight) setPage(prev => prev + 1);
  }

useEffect(() => {
  window.addEventListener("scroll", handleScroll)
},[]);


 
  return (
    <>
    <GlobalStyle/>
    <Wraper>
      <Header/>
      <UserList/>
    </Wraper>
    </>
  );
}

export default App;


const Wraper = styled.main`
  width: 100vw;
   background: #E5E5E5;
   height:(100vh-250px);
  overflow:none;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow: auto;
	width: 100%
`
