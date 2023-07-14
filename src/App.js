import './App.css';
import { Container } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import Bookmarks from './pages/Bookmarks';
import NewFeature from './components/NewFeature';

function App() {
  return (
    <BrowserRouter>
      <Container className='App' mt={3} maxWidth="container.xl">
        <Header />
        <NewFeature />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>
          <Route path="/games" element={<Games />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
