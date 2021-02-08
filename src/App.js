import logo from './logo.svg';
import './App.css';
import Navbar from './layout/navbar.jsx';
import { MovieProvider } from './context/movieContext';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
    <MovieProvider>
  <div className="App">
      <header className="App-header">
       <Navbar/>
       <MainLayout/>
      </header>
    </div>
    </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
