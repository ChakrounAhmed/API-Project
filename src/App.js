import "./App.css";
import axios from "axios";
import UserList from "./UserList";
import { useEffect, useState } from "react";

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setListOfUSer(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="contain_head">
      <div className="App-header">
        <h1>List Of Users</h1>
      </div>
      </div>
      <div className="container">
        {listOfUSer.map((user) => (
          <div className="userDetails">
            <UserList users={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
