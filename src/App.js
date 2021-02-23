import logo from './logo.svg';
import './App.css';
import Navbar from './layout/navbar.jsx';
import { MovieProvider } from './context/movieContext';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { UserProvider } from './context/userContext';
import { ScoreProvider } from './context/scoreContext';

function App() {
  return (
    <BrowserRouter>
    <ScoreProvider>
    <UserProvider>
    <MovieProvider>
  <div className="App">
      <header className="App-header">
       <Navbar/>
       <MainLayout/>
      </header>
    </div>
    </MovieProvider>
    </UserProvider>
    </ScoreProvider>
    </BrowserRouter>
  );
}

export default App;
