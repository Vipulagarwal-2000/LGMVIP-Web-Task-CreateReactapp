import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="brand">Project</span>
        <button className="get-users-button" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      <div className="user-card-grid">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="user-card" key={user.id}>
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
