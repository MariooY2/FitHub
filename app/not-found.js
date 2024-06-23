import Link from "next/link";

export default function CustomError() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">Oops! Page not found.</h1>
      <p className="mt-4 text-lg text-gray-700">
        We can't find the page you're looking for.
      </p>
      <Link
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        href="/"
      >
        Go Back Home
      </Link>
    </div>
  );
}
