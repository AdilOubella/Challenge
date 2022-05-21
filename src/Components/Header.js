import { logDOM } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
   <Nav>
       <img src="/logo.svg" alt=""/>
   </Nav>
  )
}

export default Header



const Nav = styled.nav`
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:110px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#FFFFFF;
    border: 1px solid #E5E5E5;
    overflow-Y: none,

    
`

const Title = styled.h1`
    font-size:44px;
    font-weight:bold;
    text-transform: uppercase;
    
`