import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./components/ProfilePage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<ProfilePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
