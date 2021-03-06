import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import ResultsScreen from './screens/ResultsScreen/ResultsScreen';
import StartScreen from './screens/StartScreen/StartScreen';
import BusinessUtils from "./utils/BusinessUtils";

export const BusinessUtilsContext = React.createContext(BusinessUtils);

function App() {

  useEffect(() => {
    const raceType = localStorage.getItem('raceType');
    if (raceType) {
      BusinessUtils.setRaceTypeBackground(raceType);
    }
  });

  return (
    <BusinessUtilsContext.Provider value={BusinessUtils}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/start" replace={true} />} exact />
          <Route path="/start" element={<StartScreen />} />
          <Route path="/results/:raceType" element={<ResultsScreen />} />
        </Routes>
      </div>
    </BusinessUtilsContext.Provider>
  );
}

export default App;
