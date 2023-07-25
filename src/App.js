import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookStore from './components/BookStore';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <BookStore />
            </>
)}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
