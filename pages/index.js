import React from "react";
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

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
