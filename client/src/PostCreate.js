import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ marginBottom: "6px" }}>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Write something to post..."
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={!title}
          onClick={refreshPage}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
