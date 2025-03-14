import { BrowserRouter, Routes, Route } from "react-router";

import "./styles/GlobalStyle.scss";
import { GlobalLayout } from "./layout/GlobalLayout";
import { Home } from "./pages/Home";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductDetails } from "./pages/ProductDetails";
import { Profile } from "./pages/Profile";
import { MyPage } from "./pages/MyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<Home />} />
            <Route path="category/:category" element={<CategoryPage />} />
            <Route path="product/:slug" element={<ProductDetails />} />
            {/* <Route /> */}
            <Route path="profile" element={<Profile />} />
            <Route path="my-page" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
