import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage}></Route>
        <Route to="/movie/" Component={MoviePage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
