import './App.css'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <p style={{margin: "10px 0px 30px 0px"}}>Track all your exercises here!  &nbsp; This is a MERN application with full CRUD functionality.</p>       
      </header>
      <div className="nav_component">
        <Navigation/>
      </div>
      <main>  
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
        <Route path="/edit">
          <EditPage />
        </Route>
      </main>
      <footer>
        <p>
        © 2022 by Michael Iwanek
        </p>
      </footer>
    </Router>
    </>
  )
}

export default App;
