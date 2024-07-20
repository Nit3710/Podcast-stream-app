import React from 'react'
import styled from 'styled-components'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoImage from '../images/Logo.png'
import { Link } from 'react-router-dom'
import HomeRounded from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
const MenuContainer = styled.div`
flex:0.5;
display:flex;
flex-direction:column;
height:100vh;
background-color:${({ theme }) => theme.bg};
color:${({ theme }) => theme.text_primary};

// @media (max-width:1100px){
// position:fixed;
// z-index:1000;
// width:100%;
// max-width:250px;
// transition:0.3 ease-in-out;
// left:${({ setMenuOpen }) => setMenuOpen ? "0" : "-100%"};
// }
`
const Flex = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
`
const Logo = styled.div`
color:${({ theme }) => theme.primary};
display:flex;
width:100%;
align-items:center;
justify-content:center;
gap:6px;
font-weight:bold;
font-size:20px;
margin:16px 0px;
`
const Image = styled.img`
height:40px;

`
const Close = styled.div`
display:none;
@media(max-width:1100px){
display:block;
}
`
const Elements = styled.div`
padding:4px 16px;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
gap:12px;
cursor:pointer;
width:100%;
color:${({ theme }) => theme.text_secondary};
text-decoration:none !important;
&:hover {
background-color:${({ theme }) => theme.text_secondary + 50};
}

`
const NavText = styled.div`
padding:12px 0px;
text-decoration:none;
`
const HR = styled.div`
width:100%;
height:1px;
background-color:${({ theme }) => theme.text_secondary};
margin:10px 0px;

`
const menuItems = [
    {
        link: "/",
        name: "dashboard",
        icon: <HomeRounded />
    },
    {
        link: "/search",
        name: "Search",
        icon: < SearchRoundedIcon />
    },
    {
        link: "/favourite",
        name: "Favourites",
        icon: <FavoriteRoundedIcon />
    }
]

const button = [
    {
        fun: () => console.log("upload"),
        name: "Upload",
        icon: <UploadRoundedIcon />
    },
    {
        fun: () => console.log("lightmode"),
        name: "LightMode",
        icon: <LightModeRoundedIcon />
    },
    {
        fun: () => console.log("logout"),
        name: "Logout",
        icon: <LogoutRoundedIcon />
    },
]

const Sidebar = () => {

    return (
        <MenuContainer>
            <Flex>
                <Logo>
                    < Image src={LogoImage} />
                    PodCast
                </Logo>
                <Close>
                    <CloseRoundedIcon />
                </Close>
            </Flex>
            {
                menuItems.map((item) => (
                    <Link to={item.link} style={{textDecoration:"none"}}>
                        <Elements>
                            {item.icon}
                            <NavText>{item.name}</NavText>
                        </Elements>

                    </Link>
                ))
            }
            <HR />
            {
                button.map((item) => (
                    <Elements onClick={item.fun}>
                        {item.icon}
                        <NavText>{item.name}</NavText>
                    </Elements>
                ))
            }
        </MenuContainer>
    )
}

export default Sidebar
