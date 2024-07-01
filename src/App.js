import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import KonnectPage from "./pages/KonnectPage/KonnectPage";
import Header from './components/Header/Header';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="about" element={<AboutPage/>} /> 
      <Route path="articles" element={<ArticlesPage/>} /> 
      <Route path="konnect" element={<KonnectPage/>} /> 
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
