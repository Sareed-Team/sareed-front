import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))
const Home = lazy(() => import('./view/Home'))
const Error = lazy(() => import('./view/Error'))
const AboutUs = lazy(() => import('./view/AboutUs'))
const Contact = lazy(() => import('./view/Contact'))
const Services = lazy(() => import('./view/Services'))
const Team = lazy(() => import('./view/Team'))
const FAQs = lazy(() => import('./view/FAQs'))
const Profile = lazy(() => import('./view/Profile'))

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className='mb-10'>
        <Navbar /></div>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<AboutUs />} /> */}
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/services' element={<Services />} /> */}
          <Route path='/team' element={<Team />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
