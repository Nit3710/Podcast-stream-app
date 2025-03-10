import React from 'react'
import styled from 'styled-components'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { IconButton } from '@mui/material';
const NavBarDiv = styled.div`
display:flex;
justify-content:space-between;
padding:16px 20px;
// width:100%;
align-items:center;
color:${({ theme }) => theme.text_primary};
gap:30px;
background-color:${({ theme }) => theme.bgLight};
border-radius:16px;
box-shadow:0 4px 30px rgba(0,0,0,0.1);
backdrop-filter:blur(5.7px);
-webkit-backdrop-filter:blur(5.7px);
@media (max-width: 768px) {
    padding: 16px;
  }

`
const ButtonDiv = styled.div`
font-size:14px;
cursor:pointer;
text-decoration:none;
max-width:70px;
display:flex;
width:100%;
justify-content:center;
text-align:center;
align-items:center;
color:${({ theme }) => theme.primary};
border:1px solid ${({ theme }) => theme.primary};
border-radius:6px;
padding:8px 10px;
gap:8px;

`
const IcoButton=styled(IconButton)`
color:${({ theme }) => theme.text_secondary} !important;
`
const NavBar = ({menuOpen,setMenuOpen}) => {
    return (
        <NavBarDiv>
            <IcoButton onClick={()=>setMenuOpen(!menuOpen)}>

            <MenuRoundedIcon />
            </IcoButton>
          
            <ButtonDiv>
                <PersonRoundedIcon />
                Login
                </ButtonDiv>
        </NavBarDiv>
    )
}

export default NavBar
