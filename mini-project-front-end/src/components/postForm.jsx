import axios from "axios";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPostDone, setIsPostDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handlePost = (e) => {
    e.preventDefault();

    const data = {
      userId: userId,
      title: title,
      body: body,
    };

    setIsLoading(true);
    axiosInstance
      .post("posts/add", data)
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
      <h1>Post</h1>
      {isPostDone && <h2 style={{ color: "green" }}>Post Uploaded</h2>}
      {isLoading && <h1>Loading.....</h1>}
      <form onSubmit={handlePost}>
        <div>
          <h4>User Id</h4>
          <input
            value={userId}
            placeholder="Enter Id"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </div>

        <div>
          <h4>Title of Post</h4>
          <input
            value={title}
            placeholder="Enter title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div>
          <h4>Post Body</h4>
          <input
            value={body}
            placeholder="Write your post"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
