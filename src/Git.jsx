import { useState } from "react";

const Git = () => {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");

  const fecthUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Busca usuarios</h1>
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Ingresa el usuario"
          />
        </div>
        <div>
          <button onClick={fecthUser}>Buscar</button>
        </div>
        <article>
          <div>
            <img width={200} src={user.avatar_url} alt="" />
            <h4>{user.login}</h4>
            <p>{user.bio}</p>
            <p>Repositorios: {user.public_repos}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Git;
