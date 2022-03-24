import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
