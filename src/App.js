import './App.css';
import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import Bookmarks from './pages/Bookmarks';
import NewFeature from './components/NewFeature';
import TipList from './pages/TipList';

function App() {
  const [tipHistory, setTipHistory] = useState([]);
  return (
    <BrowserRouter>
      <Container className='App' mt={3} maxWidth="container.xl">
        <Header />
        <NewFeature />
        <Routes>
          <Route path="/" element={<Home tipHistory={tipHistory} setTipHistory={setTipHistory} />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<TipList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
