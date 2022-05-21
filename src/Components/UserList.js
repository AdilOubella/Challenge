import React, {useState} from 'react'
import styled from 'styled-components';
import {useSelector,useDispatch} from "react-redux"
import Modal from './Modal';
import { deleteUser } from '../features/userSlice';


const UserList = () => {
  
    const [showModal, setShowModal] = useState(false);
    const [activeUserId,setActiveUserId] = useState(null);

    const users = useSelector(state => state.usersData.users);
    const dispatch = useDispatch();


    const toggleShowModal = () => setShowModal(prev => !prev);
    const handleShowProfile = (id) => {
      setShowModal(true);
      setActiveUserId(id);
    }
    const handleDeleteUser = (userId) => {
      dispatch(deleteUser(userId));
    }
    // console.log("check the users => ",users);
  return (
  <>
    <Modal showModal={showModal} toggleShowModal={toggleShowModal} userId={activeUserId}/>

    
    { users.length && 
      <Container>
      {users.map((user,index) => (
        <Card key={index + user.id}>
          <ProfileBtn onClick={()=>handleShowProfile(user.id)}>Profile</ProfileBtn>
          <DeleteBtn onClick={()=> handleDeleteUser(user.id)}>Delete</DeleteBtn>
          <LeftContent>
            <CardImg src={user.picture} alt=''/>
          </LeftContent>
          <RightContent>
            <CardTitle>
                 {user.firstName}
            </CardTitle>
          </RightContent>
        </Card>))}
      </Container>
    }
    
 

</>
  )
}

export default UserList;





const Container = styled.section`
  overflow-x:none;
  margin-top:175px;
  background: #E5E5E5;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  text-align:center;
  width:1529px;
`


const Card = styled.div`
  margin: 24px 33px;
   width:441px;
  height:238px;
  border-radius: 4px;
  background: #FFFFFF;
  border: 1px solid #D0D0D0;
  display:grid;
  grid-template-columns: 1fr 2fr;
  position:relative;

`

const LeftContent = styled.div`
 background-color:red;
 position:relative;
 overflow-x: hidden;
`
const RightContent = styled.div`
 height:100%;
display:flex;
/* align-items:center; */
justify-content:center;
`




const CardImg = styled.img`
position:absolute;
top:0;
right:0;
 height:100%;
 /* object-fit:cover; */
`

const CardTitle = styled.div`
  width:226px;
  height:27px;
  margin-top:25px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;

`

const ProfileBtn = styled.button`
position:absolute;
right:-8px;
width:66px;
height:27px;
bottom:49px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
background-color:#49B9DC;
color:#FFFFFF;
border:1px solid transparent;
cursor:pointer;
`
const DeleteBtn = styled.button`
position:absolute;
right:-8px;
bottom:12px;
width:66px;
height:27px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
background-color:#DC497E;
color:#FFFFFF;
border:1px solid transparent;
cursor:pointer;
`
// const UserName = styled.p`
// font-size: 24px;
// font-weight: 400;
// line-height:28.13px;
// margin-bottom:10px;

// `

// const UserImg = styled.img`
//   width:200px;
// `
