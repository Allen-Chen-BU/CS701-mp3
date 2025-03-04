import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import Nav from './components/Nav';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media screen and (max-width: 750px) {
    display: block;
  }
`;

const StyledMain = styled.main`
  height: fit-content;
  min-height: 90vh;
  background-color: rgb(253, 242, 210);
  padding: 5%;
  width: 100%;

  a {
    color:rgb(65, 127, 147);
  }
  u {
    color:rgb(65, 127, 147);
  }
`;

function Root() {
  return (
    <>
      <Header></Header>
      <StyledContainer>
        <Nav></Nav>
        <StyledMain>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path='/edu' element={<Education/>}/>
            <Route path='/exp' element={<Experience/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/skill' element={<Skills/>}/>
          </Routes>
        </StyledMain>
      </StyledContainer>
      <Footer></Footer>
    </>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component:Root}]
);

const StyleBody = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  font-family: inherit;
`;

function App() {
  return (
    <>
      <StyleBody>
        <RouterProvider router={router}/>
      </StyleBody>
    </>
  )
}

export default App
