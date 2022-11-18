import './App.scss';
import Header from './component/Header/Header.js';
import HomePage from './pages/HomePage.js';
import UploadPage from './pages/UploadPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/video/:videoId' element={<HomePage />} />
        
        <Route path='/upload' element={<UploadPage />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
