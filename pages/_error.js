import React from "react";
import Link from "next/link";

function Error({ statusCode }) {
  return (
    <>
      <h1>500 - Page Not Found</h1>
      <h2>
        <Link href="/">
          <a>Back to home page</a>
        </Link>
      </h2>
    </>
  );
}

export default Error;
