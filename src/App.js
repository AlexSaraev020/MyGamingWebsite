import './App.css';
import { Home } from './Home/Home';
import { TicTacToe } from './Games/TicTacToe/TicTacToe';
import { RockPaperScissors } from './Games/RockPaperScissors/RockPaperScissors';
import { GuessTheNumber } from './Games/GuessTheNumber/GuessTheNumber';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="App dark:bg-cyan-600 bg-sky-800">

          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/tictactoe' element={<TicTacToe/>} />
            <Route path='/rockpaperscissors' element={<RockPaperScissors/>} />
            <Route path='/guessthenumber' element={<GuessTheNumber/>} />
          </Routes>
          
      </div>
    </Router>

  );
}

export default App;
