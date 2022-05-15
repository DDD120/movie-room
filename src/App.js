import Header from "components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import Login from "pages/Login";
import Detail from "pages/Detail";
import Search from "pages/Search";
import My from "pages/My";
import Footer from "components/common/Footer";
import Container from "components/common/Container";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my" element={<My />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
