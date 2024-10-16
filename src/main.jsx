import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchMovies from "./pages/SearchMovies";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import FavoriteMovies from "./pages/FavoriteMovies";
import { FavProvider } from "./context/favorite";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchMovies />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </BrowserRouter>
    </FavProvider>
  </StrictMode>
);
