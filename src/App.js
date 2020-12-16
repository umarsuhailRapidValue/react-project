import logo from './logo.svg';
import './App.css';
import Navbar from './layout/navbar.jsx';
import GridLayout from './layout/GridLayout.jsx'
import { MovieProvider } from './context/movieContext';
function App() {
  return (
    <MovieProvider>
  <div className="App">
      <header className="App-header">
       <Navbar/>
       <GridLayout/>
      </header>
    </div>
    </MovieProvider>
  
  );
}

export default App;
