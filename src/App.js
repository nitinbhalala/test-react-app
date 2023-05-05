import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostPage from './components/PostPage';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <header className="flex justify-center">
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/post' element={<PostPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
