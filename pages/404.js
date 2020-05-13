import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <h2>
        <Link href="/">
          <a>Back to home page</a>
        </Link>
      </h2>
    </>
  );
}
