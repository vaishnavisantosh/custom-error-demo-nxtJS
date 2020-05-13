import Error from "./_error";
import Custom404 from "./404";
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

function Details({ user }) {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Id: {user.id}</p>
    </div>
  );
}

function getInitialProps({ query, res }) {
  const { id } = query;
  const user = users.find((u) => u.id == id);
  return {
    user: user,
  };
}

Details.getInitialProps = getInitialProps;

export default Details;
