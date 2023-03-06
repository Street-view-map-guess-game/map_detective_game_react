import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "firebase/auth";
import "./App.css";
import GamePage from "./pages/GamePage";
import CountrySelectionPage from "./pages/CountrySelectionPage";
import { AuthContextProvider } from "./context/AuthContext";
import ConnectToAccountPage from "./pages/ConnectToAccountPage";
import Protected from "./components/Protected";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage></FirstPage>}></Route>
          <Route path="/connectaccount" element={<ConnectToAccountPage></ConnectToAccountPage>}></Route>
          <Route exact path="/countryselection" element={<Protected><CountrySelectionPage /></Protected>}></Route>
          <Route path="/gamescreen?/:countryName" element={<Protected><GamePage /></Protected>} />
          {/* protected ile giriş yapılmadan saydfalara girilmesini engelliyoruz */}
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;