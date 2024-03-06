import { Route, Routes } from "react-router-dom";
//import All from '../components/type_vips/all'
import Home from "./pages/home";
import About from "./pages/about";
import Carshop from "./pages/carshop";
import Product from "./pages/product";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/carshop" element={<Carshop />} />

      <Route path="/product" element={<Product />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

/*    <Route path="/vip/:type" element={<All />}>
        <Route path='details' element={<h1>Hola</h1>}/>
      </Route>*/

export default Router;
