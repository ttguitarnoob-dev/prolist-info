
import './App.css';
// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import WhereWeWork from './components/WhereWeWork';
import SellingTips from './components/SellingTips';
import GetStarted from './components/GetStarted';


function App() {
  return (
    <div className="App">
      <header>
        <h1 className='home-link'>
          <a href="/">Home</a>
        </h1>
       
      </header>
      <main>
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/who-we-are' element={<WhoWeAre />} />
          <Route path='/what-we-do' element={<WhatWeDo />} />
          <Route path='/where-we-work' element={<WhereWeWork />} />
          <Route path='/selling-tips' element={<SellingTips />} />
          <Route path='/get-started' element={<GetStarted />} />


        </Routes>
      </main>
    </div>
  );
}

export default App;
