
import './App.css';
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/home/Home.jsx';
import { lazy, Suspense } from 'react';
import Header from './header/Header.jsx';
import Destination from './pages/destination/Destination.jsx';
import Crew from './pages/crew/Crew.jsx';
import Technology from './pages/technology/Technology.jsx';



function App() {
  const Home = lazy(() => import('./pages/home/Home'));
  return (
    <>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
         <Route path='/' element={<Home />} /> 
         <Route path='/destination' element={<Destination />} />
         <Route path='/crew' element={<Crew />} /> 
         <Route path='/technology' element={<Technology />} />  
      </Routes>
      </Suspense>
      </>
  );
}

export default App;
