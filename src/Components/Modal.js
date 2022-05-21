import React , {useRef,useEffect} from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {VscClose} from "react-icons/vsc";
import { getUserFetch, getUsers } from '../features/userSlice';


const Modal = ({showModal,toggleShowModal, userId}) => {

  
 const users = useSelector(state =>state.usersData);
 const dispatch = useDispatch();
 const activeUser = useSelector(state => state.usersData.activeUser);

  const modalRef = useRef();
  useEffect(() => {
    if(userId){
      dispatch(getUserFetch(userId));
    } 
   
  },[dispatch,userId])


  const handleClose = (e) => {
    if(e.target === modalRef.current) toggleShowModal();
  }


console.log("Active User => ",activeUser);

  return (
    <>
    {showModal &&
    <Container ref={modalRef} onClick={handleClose} >
        {activeUser && (
          <ModalWraper>
            <CloseIcon onClick={toggleShowModal} />
          
            {/* <DeleteBtn/> */}
            <ModalImg background={activeUser ? activeUser.picture: "none"}>
            </ModalImg>
            <ModalInfo>
              <LeftContent>
                <HeaderInfo>
                    <TextWrapper><span>{`${activeUser?.title} ${activeUser?.firstName}  ${activeUser?.lastName}`} </span></TextWrapper>
                    <TextWrapper><span>Gender </span> {activeUser.gender}</TextWrapper>
                    <TextWrapper><span>Date Of Birth </span>{activeUser.dateOfBirth}</TextWrapper>
                    <TextWrapper><span>Register Date </span>{activeUser.registerDate}</TextWrapper>
                </HeaderInfo>
                <BottomInfo>
                <TextWrapper><span>Email </span>{activeUser.email}</TextWrapper>
                <TextWrapper><span>Phone </span>{activeUser.phone}</TextWrapper>
                </BottomInfo>
              </LeftContent>
              <RightContent>
                  <TextWrapper><span>Address </span> {activeUser.location?.address}</TextWrapper>
                  <TextWrapper><span>State </span>{activeUser.location?.state}</TextWrapper>
                  <TextWrapper><span>Street </span>{activeUser.location?.street}</TextWrapper>
                  <TextWrapper><span>City </span>{activeUser.location?.city}</TextWrapper>
                  <TextWrapper><span>Country </span>{activeUser.location?.country}</TextWrapper>
                  <TextWrapper><span>Time zone </span>{activeUser.location?.timezone}</TextWrapper>
              </RightContent>
            </ModalInfo>
          </ModalWraper>
        )}
    </Container>
    }
    </>
  )
}

export default Modal



const Wrapper = styled.div`
    position:absolute;
    top:0;
    left: 0;
    bottom:0;
    right:0;
    z-index:11
   
`

const Container = styled.div`
  position:absolute;
  top:0;
  left: 0;
  bottom:0;
  right:0;
  z-index:11;
  display: flex;
  align-items:center;
  justify-content:center;
  background-color: rgba(0,0,0,.8);
  
`

const ModalWraper= styled.div`
  width:1003px;
  height:298px;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  position: relative;
  overflow-x:hidden;
  z-index:120;

`
const ModalImg = styled.div`
  position: absolute;
  left: -25.84px;
  width: 241.53px;
  height: 243.59px;
  background-image: url(${({ background }) => background});
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
  

`

const ModalInfo=styled.div`
  position: absolute;
  right:23px;
  width: 756px;
  height: 212px;
  display:grid;
  grid-template-columns: repeat(2,1fr);

  /* clear:both; */
  /* display:grid;
  grid-template-columns: repeat(2,1fr);
  /* background-color: blueviolet; */ */
  
`

const CloseIcon = styled(VscClose)`
  height:32px;
  width:32px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`

const LeftContent = styled.div` 
 
  display:flex;
  flex-direction: column;
  justify-content:space-between;

  
 
  
   
`
const RightContent = styled.div`
`
const TextWrapper = styled.p`
  padding:0 20px;
  font-size:14px;

  & span {
    font-weight:bold;
  }
`

const HeaderInfo = styled.div`
`
const BottomInfo = styled.div`

`
