import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import GalleryPhotos from "./components/pages/GalleryPhotos/GalleryPhotos";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout searchText={searchText} setSearchText={setSearchText} />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="galeria"
            element={<GalleryPhotos searchText={searchText} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
