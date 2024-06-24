function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Workouts Library
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sample Workout Entry */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Workout"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-900">Full Body Blast</h2>
            <p className="text-gray-600">
              A comprehensive body workout to engage all major muscle groups.
              Perfect for any fitness level.
            </p>
            <div className="mt-5">
              <button className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded">
                Start Workout
              </button>
              <button className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 ml-2 py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* More workouts can be added here using similar structure */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Workout"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Cardio Countdown
            </h2>
            <p className="text-gray-600">
              Increase your heart rate and endurance with this high-intensity
              cardio session.
            </p>
            <div className="mt-5">
              <button className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded">
                Start Workout
              </button>
              <button className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 ml-2 py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Workout"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Yoga for Beginners
            </h2>
            <p className="text-gray-600">
              A gentle introduction to yoga, focusing on basic poses and
              techniques.
            </p>
            <div className="mt-5">
              <button className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded">
                Start Workout
              </button>
              <button className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 ml-2 py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
