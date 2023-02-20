import "./App.css";
import GamePage from "./pages/GamePage";
import CountrySelectionPage from "./pages/CountrySelectionPage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CountrySelectionPage />
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
