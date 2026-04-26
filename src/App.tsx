import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="app">
          <Route path="cities" />
          <Route path="countries" />
          <Route path="form" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
