function page() {
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
                      76
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Calories Burned
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      8,400
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Active Users
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      412
                    </dd>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {/* Existing Actionable Cards */}
                <div className="bg-white p-6 shadow rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Start Your Workout
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Customize your daily workout routines.
                  </p>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Start Now
                  </button>
                </div>
                <div className="bg-white p-6 shadow rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Nutrition Plans
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Track your diet and calories intake.
                  </p>
                  <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    View Plans
                  </button>
                </div>

                {/* New Elements */}
                <div className="bg-white p-6 shadow rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900">
                    View Workouts
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Review your past workout sessions and achievements.
                  </p>
                  <button className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Explore
                  </button>
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
