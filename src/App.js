
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Header from './header/Header.jsx';
import { lazy, Suspense } from 'react';



function App() {
  const Home = lazy(() => import('./pages/home/Home'));
  return (
    <>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
         <Route path='/' element={<Home />} /> 
         <Route path='/destination' element={<Home />} />
         <Route path='/crew' element={<Home />} /> 
         <Route path='/technology' element={<Home />} />  
      </Routes>
      </Suspense>
      </>
  );
}

export default App;
