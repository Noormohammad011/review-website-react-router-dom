import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactUsPage'
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';
const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/about' component={AboutPage} exact />
          <Route path='/contact' component={ContactUsPage} exact />
          <Route path='/faq' component={FaqPage} exact />
          <Route path='*' component={NotFoundPage} exact />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
