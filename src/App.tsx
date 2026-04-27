import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/about";
import AppLayout from "./pages/app-layout";
import CitiesList from "./pages/city-list";
import CountriesList from "./pages/countries-list";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            path="cities"
            element={<CitiesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<CountriesList />} />
          <Route path="form" element={<>Forms</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
