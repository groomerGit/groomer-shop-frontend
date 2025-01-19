import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Homepage";
import MainLayout from "./components/HomePage/MainLayout";
import About from "./components/HomePage/AboutUsPage";
import ShopList from "./components/HomePage/ShopList";
import ShopBypage from "./components/HomePage/ShoppingPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<MainLayout />}>
          <Route path=""  element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/menu"  element={<ShopList />} />
          <Route path="/shopbypage"  element={<ShopBypage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
