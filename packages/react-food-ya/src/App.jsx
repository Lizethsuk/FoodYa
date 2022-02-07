import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RegisterSelection from './pages/RegisterSelection';
import Footer from './components/Footer';
import CustomNavbar from './components/Navbar';
import RegisterUser from './pages/RegisterUser';
import RegisterRestaurant from './pages/RegisterRestaurant';
import SignIn from './pages/SignIn';
import RestaurantPage from './pages/RestaurantPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register-selection" element={<RegisterSelection />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-restaurant" element={<RegisterRestaurant />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
