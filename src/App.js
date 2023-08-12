import './App.css';
import { useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import NewFeature from './components/NewFeature';
import TipList from './pages/TipList';

function App() {
  const [tipHistory, setTipHistory] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [games, setGames] = useState([]);

  const loadGames = async() => {
    const response = await fetch('http://127.0.0.1:8000/games');
    const gameData = await response.json();
    const games = gameData.map(game => {
      return ({
        ...game,
        label: game.title,
        value: game.title
      })
    })
    setGames(games);
  }

  const loadExperiences = async () => {
    const response = await fetch('http://127.0.0.1:8000/experience');
    const experienceData = await response.json();
    setExperiences(experienceData)
  }
  useEffect(() => {
    loadExperiences()
    loadGames()
  }, [])

  return (
    <BrowserRouter>
      <Container className='App' mt={3} maxWidth="container.xl">
        <Header />
        <NewFeature />
        <Routes>
          <Route path="/" element={<Home games={games} tipHistory={tipHistory} setTipHistory={setTipHistory} experiences={experiences} />} />
          {/* <Route path="/bookmarks" element={<Bookmarks />} /> */}
          <Route path="/games" element={<Games games={games} />} />
          <Route path="/games/:id" element={<TipList experiences={experiences} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
