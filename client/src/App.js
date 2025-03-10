import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/theme'
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Search from './pages/Search'
import Favourite from './pages/Favourite'
import Profile from './pages/Profile'
import PodcastDetails from './pages/PodcastDetails'
import DisplayPodcast from './pages/DisplayPodcast'

// we are writing styling here
const Container = styled.div`
display:flex;
background:${({ theme }) => theme.bgLight};
width:100%;
height:100vh;
overflow-x:hidden;
overflow-y:hidden;
`
const Frame = styled.div`
display:flex;
flex-direction:column;
flex:3;
`

// component starts from here
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container setMenuOpen={setMenuOpen}>
          {
            menuOpen && <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setDarkMode={setDarkMode} darkMode={darkMode} />
          }
          <Frame>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/search" exact element={<Search />} />
              <Route path="/favourites" exact element={<Favourite />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/podcast/:id" exact element={<PodcastDetails />} />
              <Route path="/showpodcast/:type" exact element={<DisplayPodcast />} />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
