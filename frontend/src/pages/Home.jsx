import { useState, useEffect } from "react";
import api from "../api";
import Iha from "../components/Iha";
import "../styles/Home.css";

function Home() {
  const [ihas, setIhas] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getIhas();
  }, []);

  const getIhas = () => {
    api
      .get("/api/ihas/")
      .then((res) => res.data)
      .then((data) => {
        setIhas(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteIha = (id) => {
    api
      .delete(`/api/ihas/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Iha deleted!");
        else alert("Failed to delete iha.");
        getIhas();
      })
      .catch((error) => alert(error));
  };

  const createIha = (e) => {
    e.preventDefault();
    api
      .post("/api/ihas/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Iha created!");
        else alert("Failed to make iha.");
        getIhas();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Kiralanan IHA</h2>
        {ihas.map((iha) => (
          <Iha iha={iha} onDelete={deleteIha} key={iha.id} />
        ))}
      </div>
      <h2>Kiralanacak IHA</h2>
      <form onSubmit={createIha}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Home;
