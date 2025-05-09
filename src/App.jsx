import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Header from './pages/Header';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
