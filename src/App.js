import React from 'react'
import './App.css'
import { Article, Brand, Cta, Navbar} from './component';
import {Footer, Possiblity, Features, Header, Hello,Whatgpt} from './container'


const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
     <Navbar />
     <Header />
      </div>
      <Brand />
     <Article />
      <Features />
      <Possiblity />
      <Cta />
     <Hello />
     <Whatgpt />
      
      <Footer />

    </div>
  )
}

export default App


