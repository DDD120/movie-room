import Header from "components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Detail from "pages/Detail";
import Search from "pages/Search";
import My from "pages/My";
import Footer from "components/common/Footer";
import { useSelector } from "react-redux";

function App() {
  const { verified } = useSelector((state) => state.user.user);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my/:id" element={verified ? <My /> : <Login />} />
        <Route path="/signup" element={verified ? <Main /> : <Signup />} />
        <Route path="/login" element={verified ? <Main /> : <Login />} />
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
