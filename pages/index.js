// import React, { Component } from "react";
// import { Grid } from "@material-ui/core";
// // import QLogo from './../src/assets/images/Q-logo.svg';
// // import '../styles/public.scss';

// export default function AuthLayout(props) {
//   return (<Grid container className="login-page-container">
//     <Grid item sm={6} xs={12} className="login-form">
//       {props.children}
//     </Grid>
//     <Grid item sm={6} xs={0} className="background-img trangles">
//       <div className="trangle-big">
//         <div className="image-1">
//           <p className="error-text-small">Page not found</p>
//         </div>
//         <div className="shadow-image-1"></div>
//         <div className="image-2">
//           <p className="error-text-big">Page not found</p>
//         </div>
//         <div className="shadow-image-2"></div>
//       </div>
//       <div className="trangle-small">
//       </div>
//     </Grid>
//   </Grid>
//   );
// }

import React, { Component } from "react";
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
        <div className="btnWrapper">
          <button className="btnError rollTest" onClick={() => arr[0].value}>Custom Error</button>
        </div>

      </div>
    );
  }
}

export default Home;
