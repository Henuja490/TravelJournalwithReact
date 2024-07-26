import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/Navbar'

import Items from './components/Items'


import data from './components/data'

import Footer from './components/footer'

const card = data.map((data)=>{
  
  return (
    <Items 
        key={data.id}
        {...data}
    
    />
  )
})


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <div>
    
    <NavBar />
    <section>
      {card}
    </section>
    
    
   
    <Footer />
   

  </div>
  
  
)

