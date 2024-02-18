import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Details from './components/Details'
import Error from './components/Error'
import CreateForm from './components/CreateForm';
// import Landing from './components/Landing';
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <>
      <NavBar />
      <div id="main-content">
        <Routes>
          {/* <Route index element = { <Landing /> } /> */}
          <Route path="about" element = { <About />} errorElement={<Error />}  />
          <Route path="error" element = { <Error /> } />
          <Route index element = { <Main /> } />
          <Route path="addcamera" element = { <CreateForm /> } />
          {/* <Route index element = { <Main /> } /> */}
          <Route path="signin" element = { <SignIn /> } />
          <Route path="newsletter" element = { <Newsletter /> } />
          <Route path="cameras/:id" element = { <Details /> } />
          {/* <Route path="homelayout" element={<HomeLayout />} />
          <Route path="error" element={<Error />} />
          <Route path="landing" element={<Landing />} /> */}


        </Routes>
        
      </div>
      <Footer />
    </>
  );
}

export default App
