import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homePage";
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";
import Header from "./components/header";
import BookPage from "./pages/allBookPage";
import NotFoundPage from "./pages/notFoundPage";
import UserDetailsPage from "./pages/userDetailsPage";
import BookDetailsPage from "./pages/bookDetailsPage";
import UserList from "./components/UserList";
import Footer from "./components/footer";
import Authenticate from "./components/authenticate";
import SearchPage from "./pages/searchPage";
import AddBook from "./pages/addBook";
import BorrowPage from "./pages/borrowPage";
import ReturnPage from "./pages/returnPage";
import CurrentBorrowedPage from "./pages/currentBorrowedPage";
import UpdateBook from "./components/updateBook";
import ReviewForm from "./components/reviewForm";
import DeleteBook from "./components/deleteBook";
import ReviewPage from "./pages/reviewPage";
import UserHistoryPage from "./pages/userHistoryPage";

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
          <Route path="/user/:userId/history" element={<UserHistoryPage />} />
          <Route path="/book/:bookId" element={<BookDetailsPage />} />
          <Route path="/book/:bookId/borrow" element={<BorrowPage />} />
          <Route path="/book/:bookId/return" element={<ReturnPage />} />
          <Route
            path="/:userId/current/borrow"
            element={<CurrentBorrowedPage />}
          />
          <Route path="/book/:bookId/reviews/create" element={<ReviewForm />} />
          <Route path="/book/:bookId/reviews" element={<ReviewPage />} />
          <Route path="/book/:bookId/update" element={<UpdateBook />} />
          <Route path="/book/:bookId/delete" element={<DeleteBook />} />
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
