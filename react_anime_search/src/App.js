// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'


function App() {

  const [ animeList, setAnimeList ]  = useState([])
  const [ topAnime, setTopAnime ] = useState([])
  const [ search, setSearch ] = useState("")


  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        
      </div>
    </div>
  );
}

export default App;
