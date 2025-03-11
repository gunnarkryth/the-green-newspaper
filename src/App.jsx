import { BrowserRouter, Routes, Route } from "react-router";
import { Button } from "./components/Button";
import { Dropdown } from "./components/Dropdown";
import { Header } from "./components/Header";

import "./styles/GlobalStyle.scss";
import { GlobalLayout } from "./layout/GlobalLayout";
import { Home } from "./pages/Home";
import { CategoryPage } from "./pages/CategoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/products/category/:category"
              element={<CategoryPage />}
            />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
