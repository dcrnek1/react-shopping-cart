import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div>This page does not exist.</div>
      <Link to="/" className="text-blue-600 dark:text-blue-500 hover:underline">Return back home.</Link>
    </>
  );
}
