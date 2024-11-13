import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import GalleryPhotos from "./components/pages/GalleryPhotos/GalleryPhotos";

function App() {
  // const [searchText, setSearchText] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="galeria" element={<GalleryPhotos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
