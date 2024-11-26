
import About from './About'
import Home from './Home'
import Head from './component/head';
import Form from './Form';
import Header from './header';
import Footer from './Footer';
import React, { useState } from "react";
import Table from './table';

function App() {
  const [current,setcurrent] = useState('')
  return (
  
    <div> 
      <Header/>
      <Head/>
      <Home/>
       <Form/>
        <About/>
        <Footer/>
        <h1>Current:{current}</h1>
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"onChange={e=>setcurrent(e.target.value)} ></textarea>
  <label for="floatingTextarea">Comments</label>
  <Table/>
</div>
    </div>



  )
}

export default App;
