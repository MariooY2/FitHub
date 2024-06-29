import Link from "next/link";
import Google from "../_components/GoogleSignin";
import {RedirecttoDashboard} from "../_components/Redirect";
import { signIn } from "../_lib/auth";


 function page() {

 

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="Logo Image"
              className="mb-4 max-w-xs w-full"
            />
          </div>

          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Login
          </h2>
          <div className="text-center mb-4">
            <p className="text-red-500">
              Only login by Google is currently available
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                disabled
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <Google />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
