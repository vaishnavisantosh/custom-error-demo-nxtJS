import React, { Component } from "react";
import Link from "next/link";
import Error from "./_error";

const users = [
  {
    id: 1,
    name: "User1",
    age: 20,
  },
  {
    id: 2,
    name: "User2",
    age: 30,
  },
];

const arr = [];

class Home extends Component {
  componentDidCatch(err) {
    console.log("errrrrrr0r in didcatch--------->", err);
  }

  render() {
    return (
      <div>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <button onClick={() => arr[0].value}>Custom Error</button>
      </div>
    );
  }
}

export default Home;
