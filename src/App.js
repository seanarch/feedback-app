import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import Post from './components/Post'
import { FeedbackProvider } from './context/FeedbackContext'
 
function App() {
 
  return (
    <FeedbackProvider>

      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route 
              exact 
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  
                </>

              }> 
            </Route>
            <Route path='/about' element={<AboutPage />}  />
            <Route path='/post/*' element={<Post />}  />
            
          </Routes>
  
          
        <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
