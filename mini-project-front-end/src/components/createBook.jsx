import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import "./CreateBook.css";

const CreateBook = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [isPostDone, setIsPostDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handlePost = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      author: author,
      genre: genre,
      description: description,
      url: url,
    };

    setIsLoading(true);
    axiosInstance
      .post("book/create", data)
      .then((resp) => {
        console.log("The Response", resp);
        setIsPostDone(true);
        navigate("/");
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error ", error);
        setError(error);
        // setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Create New Book</h1>
      {isPostDone && <h2 style={{ color: "green" }}>Book Created</h2>}
      {isLoading && <h1>Loading.....</h1>}
      <form onSubmit={handlePost}>
        <div>
          <h4>Book Name</h4>
          <input
            value={name}
            placeholder="Enter name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <h4>Author</h4>
          <input
            value={author}
            placeholder="Author's Name "
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <div>
          <h4>Genre</h4>
          <input
            value={genre}
            placeholder="Genre"
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
        </div>
        <div>
          <h4>Description</h4>
          <input
            value={description}
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <h4>Book Cover url</h4>
          <input
            value={url}
            placeholder="Image URL"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreateBook;
