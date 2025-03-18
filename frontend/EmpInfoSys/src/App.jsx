import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateEmp from './CreateEmp';
import ReadEmp from './ReadEmp';
import UpdateEmp from './UpdateEmp';
import DeleteEmp from './DeleteEmp';
import Navbar from './Navbar';
import './App.css'
import Header from './Header';
import Footer from './Footer';

function App() {


  return (
    <>
    <Header></Header>
      <Router>
      <div>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreateEmp />} />
          <Route path="/read" element={<ReadEmp />} />
          <Route path="/edit-employee/:id" element={<UpdateEmp />} />
          <Route path="/delete" element={<DeleteEmp />} />
        </Routes>
      </div>
      
    </Router>
    <Footer></Footer>
    </>
  )
}

export default App
