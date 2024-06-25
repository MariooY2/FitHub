import { getTotalRows, getUserDataByEmail } from "../_Backend/Actions";
import {
  getTotalRowsForEmail,
  getTotalCaloriesForEmail,
} from "../_Backend/Activities";
import { auth } from "../_lib/auth";
import Link from "next/link";

//export const revalidate=0;

async function page() {
  const session = await auth();
  const email = session.user.email;
  const TotalUsers = await getTotalRows();
  const userData = await getUserDataByEmail(email);
  const TotalWorkouts = await getTotalRowsForEmail(email);
  const TotalCalories = await getTotalCaloriesForEmail(email);

  return (
    <>
      <div className="h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back to FitHub
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Stats Card */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Workouts
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {TotalWorkouts}
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Calories Burned
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {TotalCalories}
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Users
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {TotalUsers}
                    </dd>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {/* Existing Actionable Cards */}
                <div className="bg-white p-6 shadow rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Add a Workout
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Customize your daily workout routines.
                  </p>
                  <Link href="dashboard/activity">
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Start Now
                    </button>
                  </Link>
                </div>
               
                <div className="bg-white p-6 shadow rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Community Feedback
                  </h2>
                  <p className="mt-4 text-gray-600">
                    See what our community has to say about us!
                  </p>
                  <Link href="dashboard/community">
                  <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    View Testimonials
                  </button>
                  </Link>
                </div>

                {/* New Elements */}
                <div className="bg-white p-6 shadow rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900">
                    View Workouts
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Review your past workout sessions and achievements.
                  </p>
                  <Link href="dashboard/workouts">
                    <button className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                      Explore
                    </button>
                  </Link>
                </div>
                <div className="bg-white p-6 shadow rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Progress Tracker
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Monitor your progress and set new goals.
                  </p>
                  <button className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Track Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default page;
