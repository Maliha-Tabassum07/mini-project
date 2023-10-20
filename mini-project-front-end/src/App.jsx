import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homePage";
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";
import Header from "./components/header";
import PostPage from "./pages/allBookPage";
import NotFoundPage from "./pages/notFoundPage";
import AddPost from "./pages/addPost";
import UserDetailsPage from "./pages/userDetailsPage";
import UserList from "./components/UserList";
import Footer from "./components/footer";
import Authenticate from "./components/authenticate";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Authenticate />}>
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:userId" element={<UserDetailsPage />} />
          <Route path="/users/search" element={<SearchPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/postAdd" element={<AddPost />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
