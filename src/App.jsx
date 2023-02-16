import React, { useEffect, Suspense } from 'react';
import {
  HashRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Policy from './pages/Policy';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }); // triggered on route change

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> {/*路径为/时匹配首页*/}
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
