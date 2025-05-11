import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Header from './pages/Header';
import EventDetails from './pages/EventDetails';
import { AuthProvider } from './UserContext';
import SignInForm from './pages/SignIn';
import ProtectedRoute from './routes/ProtectedRoute';
import Profile from './pages/Profile';
import store from './store';
import { Provider } from 'react-redux';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="m-5">
      <Provider store={store}>
      <BrowserRouter>
      <AuthProvider>
      <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/signIn" element={<SignInForm />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}  />
          </Routes>
        </main>
      </AuthProvider>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
