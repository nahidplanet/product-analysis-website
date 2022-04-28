
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import { createContext } from 'react';
import useReviews from './Hooks/useReviews';
import NoteFound from './components/NotFound/NoteFound';


export const MyContext = createContext("review api");

function App() {
  const [getReviews,setReviews] = useReviews()
  return (
    <div className="App">
      <Header></Header>
      
     <MyContext.Provider value={getReviews}>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NoteFound></NoteFound>}></Route>
      </Routes>
     </MyContext.Provider>
    </div>
  );
}

export default App;
