import Image from "next/image";
import Link from "next/link";
import { auth } from "./_lib/auth";
export default async function HomePage() {
  const session = await auth();
  const name = session?.user?.name;
  const image = session?.user?.image;
  return (
    <>
      <div className="h-screen bg-gray-50">
        <header className=" text-white py-4  relative z-10">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">FitHub</h1>
            <nav className="flex gap-8 justify-between">
              {session?.user ? (
                <>
                  <Image
                    src={image}
                    alt={name}
                    width={35}
                    height={35}
                    className="rounded-full"
                  />
                  <Link href="dashboard">Dashboard</Link>
                </>
              ) : (
                <Link href="login">Login</Link>
              )}

              <Link href="contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="container px-5">
          <section className=" text-center my-12 h-96">
            <div className="absolute inset-0 ">
              <Image
                src="/AI1.jpg"
                alt="Fitness"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full mt-28">
              {session?.user ? (
                <h2 className="lg:text-7xl text-3xl font-bold mb-12 text-white">
                  Welcome Back {name} to FitHub!
                </h2>
              ) : (
                <>
                  <h2 className="lg:text-8xl text-3xl font-bold mb-4 text-white">
                    Welcome to FitHub!
                  </h2>
                  <p className="lg:text-2xl text-lg font-bold text-stone-100 mb-6">
                    Your personalized fitness companion to achieve your health
                    goals.
                  </p>
                </>
              )}

              <div className="flex justify-center">
                {session?.user ? (
                  <Link
                    href="/dashboard"
                    className="bg-blue-500 text-white font-semibold text-xl py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="bg-blue-500 text-white font-semibold text-xl py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
