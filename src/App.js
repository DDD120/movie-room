import Header from "components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Detail from "pages/Detail";
import Search from "pages/Search";
import My from "pages/My";
import Footer from "components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my" element={<My />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
