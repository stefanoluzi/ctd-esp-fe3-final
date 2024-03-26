import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path="*" element={<h1>Página no encontrada. ERROR 404</h1>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
