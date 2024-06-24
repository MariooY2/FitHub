function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Your Progress Dashboard
      </h1>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fitness Progress */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-bold text-gray-900">Fitness Goals</h2>
          <p className="text-gray-600">
            Here's the progress on your current fitness goals.
          </p>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Strength Training</span>
              <span className="font-bold">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Cardio Fitness</span>
              <span className="font-bold">50%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Nutritional Progress */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-bold text-gray-900">
            Nutrition Tracking
          </h2>
          <p className="text-gray-600">Your daily intake vs. goals.</p>
          <canvas id="nutritionChart"></canvas>{" "}
          {/* Placeholder for a dynamic chart */}
        </div>

        {/* Overall Health */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-bold text-gray-900">Overall Health</h2>
          <p className="text-gray-600">Overview of your health metrics.</p>
          <canvas id="healthChart"></canvas>{" "}
          {/* Placeholder for a dynamic chart */}
        </div>
      </div>

      {/* Detailed Activity Logs */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Activity Logs</h2>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Activity
                </th>
                <th scope="col" className="py-3 px-6">
                  Duration
                </th>
                <th scope="col" className="py-3 px-6">
                  Calories Burned
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">2021-09-01</td>
                <td className="py-4 px-6">Morning Run</td>
                <td className="py-4 px-6">30 min</td>
                <td className="py-4 px-6">300 kcal</td>
              </tr>
              {/* More rows can be dynamically inserted here */}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
