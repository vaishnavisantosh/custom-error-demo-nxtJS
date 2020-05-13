import React from "react";
import Link from "next/link";
// import Error from "./_error";

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
      {/* <Error> */}
      <button
        onClick={() => {
          console.log("hi", arr[0].value);
        }}
      >
        Custom Error
      </button>
      {/* </Error> */}
    </>
  );
}

// function getInitialProps({ err, res }) {
//   console.log("herer");
//   let statusCode;
//   // If the res variable is defined it means nextjs
//   // is in server side
//   if (res) {
//     console.log("in if", res);
//     statusCode = res.statusCode;
//   } else if (err) {
//     // if there is any error in the app it should
//     // return the status code from here
//     statusCode = err.statusCode;
//     console.log("in else if", err);
//   } else {
//     // Something really bad/weird happen and status code
//     // cannot be determined.
//     console.log("in else");
//     statusCode = null;
//   }
//   return { statusCode };
// }
// Home.getInitialProps = getInitialProps;

export default Home;
