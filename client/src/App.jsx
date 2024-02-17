import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import Details from './components/Details'
import CreateForm from './components/CreateForm';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavBar />
      <div id="main-content">
        <Routes>
          <Route index element = { <Main /> } />
          <Route path="signin" element = { <SignIn /> } />
          <Route path="cameras/:id" element = { <Details /> } />
          <Route path="addCamera" element={<CreateForm />} />


        </Routes>
        
      </div>
      <Footer />
    </>
  );
}

export default App