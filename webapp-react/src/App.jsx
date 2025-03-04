import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index path="/" Component={HomePage}></Route>
          <Route path="/movies/:id" Component={MoviePage}></Route>
          <Route path="*" Component={PageNotFound}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
