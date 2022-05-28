import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import StartScreen from './screens/StartScreen/StartScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/start" replace={true} />} exact />
        <Route path="/start" element={<StartScreen />} />
      </Routes>
    </div>
  );
}

export default App;
