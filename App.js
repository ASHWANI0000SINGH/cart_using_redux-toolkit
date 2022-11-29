import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import "./style/app.scss"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>

    
    </Routes>
    <Toaster/>
    </BrowserRouter>
    
  );
}

export default App;
