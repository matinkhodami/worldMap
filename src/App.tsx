import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/about";
import AppLayout from "./pages/app-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="cities" element={<>Cities</>} />
          <Route path="countries" element={<>Countries</>} />
          <Route path="form" element={<>Forms</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
