// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'


function App() {

  const [ animeList, setAnimeList ]  = useState([])
  const [ topAnime, setTopAnime ] = useState([])
  const [ search, setSearch ] = useState("")

//TOP 10 anime listesi için
  const GetTopAnime = async () => {
    const temp = await fetch ('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then(res => res.json())

      setTopAnime(temp.top.slice(0,10));
  }

  //SEARCH sonuçları için 
  const HandleSearch = e => {
    e.preventDefault();
    
    console.log(search);
    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)

    .then(res => res.json());

      

console.log(temp.results);

      setAnimeList(temp.results)
  }



  useEffect(() => {
    GetTopAnime()

    // console.log("topAnime");
  },[])

  // console.log(topAnime);


  return (
    <div className = "App">
      <Header />
      <div className ="content-wrap">
        <Sidebar 
          topAnime = { topAnime }/>
          <MainContent 
              HandleSearch = { HandleSearch }
              search = { search }
              setSearch = { setSearch }
              animeList = { animeList}
          />
      </div>
    </div>
  );
}

export default App;
