import './index.css';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { BlogPage } from './pages/BlogPage';
import { Navbar } from './components/Navbar';
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import { Foteer } from './components/Foteer';
import { BackToUp } from './components/BackToUp';

function App() {
  

  return (
   <div className="selection:bg-ButtonColor">
    
    <BrowserRouter>  
    <Navbar />
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/blog'  element={<BlogPage />}/>
      <Route path='/contact' element={<Contact />} />

    </Routes>
    <Foteer />
    <BackToUp />
    
    </BrowserRouter>
   </div>
  )
}

export default App
