import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Students from './components/Students';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import NotFound from './components/NotFound';

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Toaster />
      <Navbar />
      <div className="flex-grow mx-auto container">
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/students"
            element={<Students />}
          />
          <Route
            path="/teachers"
            element={<Teachers />}
          />
          <Route
            path="/courses"
            element={<Courses />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
