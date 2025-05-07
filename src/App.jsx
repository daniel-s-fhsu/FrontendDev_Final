import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Index from './pages/Index'

function App() {

  return (
    <>
      <BrowserRouter>
        <main className="content">
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
