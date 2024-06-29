import Image from "next/image";
import Link from "next/link";
import { auth } from "./_lib/auth";

export default async function HomePage() {
  const session = await auth();
  const name = session?.user?.name;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <header className="text-white py-4 relative z-10">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">FitHub</h1>
            <nav className="flex gap-8">
              {session?.user ? (
                <Link href="/dashboard" className="text-lg">Dashboard</Link>
              ) : (
                <Link href="/login" className="text-lg">Login</Link>
              )}
              <Link href="/contact" className="text-lg">Contact</Link>
            </nav>
          </div>
        </header>

        <main>
          <section className="flex justify-center items-center text-center h-screen -mt-16">
            <div className="absolute inset-0">
              <Image
                src="/AI1.jpg"
                alt="Fitness"
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
            <div className="relative z-10 p-5">
              {session?.user ? (
                <h2 className=" 2xl:text-9xl text-7xl font-bold text-white">
                  Welcome Back, {name}!
                </h2>
              ) : (
                <>
                  <h2 className="2xl:text-9xl text-7xl font-bold text-white">
                    Welcome to FitHub!
                  </h2>
                  <p className="2xl:text-2xl text-xl text-white mt-4">
                    Your personalized fitness companion to achieve your health goals.
                  </p>
                </>
              )}
              <Link
                href={session?.user ? "/dashboard" : "/login"}
                className="2xl:px-8 2xl:py-6 2xl:text-2xl mt-8 inline-block bg-blue-500 text-white font-semibold text-xl py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300"
              >
                {session?.user ? "Dashboard" : "Get Started"}
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
