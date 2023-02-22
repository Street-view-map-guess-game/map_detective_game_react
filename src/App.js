import "./App.css";
import GamePage from "./pages/GamePage";
import CountrySelectionPage from "./pages/CountrySelectionPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CountrySelectionPage />} >

        </Route>
        <Route path="/gamescreen?/:countryName" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
