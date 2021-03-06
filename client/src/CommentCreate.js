import React, { useState } from "react";
import axios from "axios";

const App = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ marginBottom: "6px" }}>
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            placeholder="Write a comment..."
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={!content}
          onClick={refreshPage}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
