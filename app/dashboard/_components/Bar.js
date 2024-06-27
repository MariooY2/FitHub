"use client";
import SignOut from "@/app/_components/SignOut";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
function Bar({ image, name }) {
  const [isOpen, setisOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="fixed top-0 right-0 lg:p-2 sm:mx-9 px-5 z-50 ">
        {/* Menu content goes here */}
        <button
          onClick={() => setisOpen(false)}
          className="mt-4 sm:p-3 p-2 bg-red-700 text-white rounded-full hover:bg-red-800"
        >
          Open
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-0 right-0 z-50 lg:p-2 sm:mx-9 px-5">
        {/* Menu content goes here */}

        <button
          onClick={() => setisOpen(true)}
          className="mt-4 sm:p-3 p-2 bg-red-700 text-white rounded-full hover:bg-red-800"
        >
          Close
        </button>
      </div>
      <aside className="flex flex-col justify-between items-center h-screen bg-gray-800 text-white p-1">
        <ul>
          <li className="mb-6 ">
            <div className="flex items-center justify-center flex-col mb-10">
              <div className="w-16 h-16 relative overflow-hidden rounded-full mt-7 mb-5 ">
                {/* Container to apply rounding */}{" "}
                <Image
                  src={image}
                  alt="Descriptive Alt Text"
                  fill
                  objectFit="cover"
                  className="rounded-full " // Applying rounded-full here as well for Tailwind
                />
              </div>
              <div>{name}</div>
            </div>
            <div className="flex items-center justify-center flex-col ">
              <Link
                href="/dashboard"
                className="w-full block p-4 hover:bg-gray-700 rounded text-center"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/activity"
                className="w-full block p-4 hover:bg-gray-700 rounded text-center"
              >
                Activity
              </Link>
              <Link
                href="/dashboard/workouts"
                className="w-full block p-4 hover:bg-gray-700 rounded text-center"
              >
                Workouts
              </Link>
              <Link
                href="/dashboard/progress"
                className="w-full block p-4 hover:bg-gray-700 rounded text-center"
              >
                Progress
              </Link>
              <Link
                href="/dashboard/community"
                className="w-full block p-4 hover:bg-gray-700 rounded text-center"
              >
                Community
              </Link>
            </div>
          </li>

          {/* Add additional navigation items here */}
        </ul>

        <div className="mt-6 mb-4">
          <SignOut />
        </div>
      </aside>
    </>
  );
}

export default Bar;
