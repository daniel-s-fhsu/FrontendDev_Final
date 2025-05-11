import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Header from './pages/Header';
import EventDetails from './pages/EventDetails';
import { AuthProvider } from './UserContext';
import SignInForm from './pages/SignIn';

function App() {

  return (
    <div className="m-5">
      <AuthProvider>
      <BrowserRouter>
      <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/signIn" element={<SignInForm />} />
          </Routes>
        </main>
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
