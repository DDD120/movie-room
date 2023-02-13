import Header from "components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Detail from "pages/Detail";
import Search from "pages/Search";
import My from "pages/My";
import Footer from "components/common/Footer";
import { useCheckToken } from "hooks/useCheckToken";
import Meta from "components/common/Meta";

function App() {
  useCheckToken();

  return (
    <BrowserRouter>
      <Meta
        title="MOVIE ROOM"
        description="영화의 상세정보 보기 및 리뷰를 작성해보세요"
        keywords="영화, 최근 개봉작, 인기 상영작, 최고 평점, 개봉 예정작"
        imgsrc="/assets/default-og.png"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my/:id" element={<My />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
