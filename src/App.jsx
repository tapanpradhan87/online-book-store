import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Books from "./pages/Books";
import Cart from "./pages/Cart";

import AppContext from "./contexts/AppContext";

function App() {
  const [cart, setCart] = useState([]);

  const [data, setData] = useState ([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    getApiData();
  },[])

const getApiData = async () => {
  setLoading(true);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const apiData = await response.json();
  setData(apiData);
  setLoading(false);
}
  return (
    <>
      <AppContext.Provider value={{ cart, setCart, data, loading, refresh:getApiData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="books" element={<Books />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
