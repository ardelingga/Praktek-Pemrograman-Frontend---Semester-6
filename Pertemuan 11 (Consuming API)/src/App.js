import Home from "./pages/Home"
import CreateMovie from "./pages/movie/Create"
import { Routes, Route } from "react-router-dom"
import TopRatedMovie from "./pages/movie/TopRated";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import PopularMovie from "./pages/movie/Popular";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/create" element={<CreateMovie />}/>
          <Route path="/movie/popular" element={<PopularMovie />}/>
          <Route path="/movie/now" element={<NowPlayingMovie />}/>
          <Route path="/movie/top" element={<TopRatedMovie />}/>
        </Routes>
      </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;
