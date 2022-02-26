import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./pages/ProfilePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import DetailsPage from "./pages/DetailsPage";
import NewsFeed from "./pages/NewsFeed";


function App() {
  return (
    <BrowserRouter>
    <MyNavbar />
    <Routes>
    <Route path="*" element={<NewsFeed />} />
      <Route path="/in/me" element={<ProfilePage />} />
      <Route path="/in/:profileId" element={<ProfilePage />} />
      <Route path="/in/details/:profileId/" element={<DetailsPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
