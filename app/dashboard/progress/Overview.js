export default function Overview() {
  return (
    <>
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
    </>
  );
}
