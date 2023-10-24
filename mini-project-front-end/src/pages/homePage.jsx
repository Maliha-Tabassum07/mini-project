import BookListHome from "../components/bookListHome";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Home page</h1>
      <h6 style={{ textAlign: "center" }}>Here you will get to borrow books from the various collection of books available </h6>
      <h6 style={{ textAlign: "center" }}>So start reading right now</h6>
      </div>
      
      <BookListHome />
    </div>
  );
};

export default HomePage;
