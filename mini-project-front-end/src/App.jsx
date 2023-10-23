import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homePage";
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";
import Header from "./components/header";
import BookPage from "./pages/allBookPage";
import NotFoundPage from "./pages/notFoundPage";
import UserDetailsPage from "./pages/bookDetailsPage";
import UserList from "./components/UserList";
import Footer from "./components/footer";
import Authenticate from "./components/authenticate";
import SearchPage from "./pages/searchPage";
import AddBook from "./pages/addBook";

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
          <Route path="/book/:bookId" element={<UserDetailsPage />} />
          <Route path="/users/search" element={<SearchPage />} />
          <Route path="/book/all" element={<BookPage />} />
          <Route path="/book/create" element={<AddBook />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
