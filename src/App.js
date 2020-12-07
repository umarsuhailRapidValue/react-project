import logo from './logo.svg';
import './App.css';
import Navbar from './layout/navbar.jsx';
import GridLayout from './layout/GridLayout.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <GridLayout/>
      </header>
    </div>
  );
}

export default App;
