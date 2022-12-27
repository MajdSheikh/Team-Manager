import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  Link, 
  useNavigate
} from "react-router-dom";
import Create from './views/Create';
import { useEffect, useState } from 'react'
import PlayerList from './components/PlayerList'
import GamesView from './views/GamesView'


function App() {
  

  return (
    <div className="App">
      <h2><Link to={"/players/list"}>Manage Players</Link> | <Link to={"/status/game/:num"}>Manage Player Status</Link></h2>
<Routes>
{/* <Route element={<Main/>} path="/"/> */}
<Route element={<PlayerList/>} path="/players/list" />
<Route element={<Create/>} path="/players/create"/>
{/* <Route element={<GamesView />} path='/status/game/:num' /> */}
</Routes>
    </div>
  );
}

export default App;


