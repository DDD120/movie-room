import Header from "components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "components/common/Footer";
import { useCheckToken } from "hooks/useCheckToken";
import Meta from "components/common/Meta";
import { Suspense, lazy } from "react";
import Loading from "components/loading/Loading";

const Main = lazy(() => import("pages/Main"));
const Login = lazy(() => import("pages/Login"));
const Signup = lazy(() => import("pages/Signup"));
const Detail = lazy(() => import("pages/Detail"));
const Search = lazy(() => import("pages/Search"));
const My = lazy(() => import("pages/My"));

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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my/:id" element={<My />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
