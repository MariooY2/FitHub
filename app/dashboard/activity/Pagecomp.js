"use client";

import { insertActivity } from "../../_Backend/Activities";
import { useState } from "react";
import { useRouter } from "next/navigation";

function page({ email }) {
  const router = useRouter();

  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button and show loading state
    insertActivity(email, activity, duration, caloriesBurned)
      .then((data) => {
        console.log("Inserted data:", data);
        setActivity("");
        setDuration("");
        setCaloriesBurned("");
        router.refresh();
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      })
      .finally(() => {
        setIsSubmitting(false); // Re-enable the button after operation
      });
  };


  return (
    <div className="h-screen bg-gray-100 ">
      <header className="bg-blue-500 text-white text-center  shadow w-full py-7">
        <h1 className="text-xl sm:text-4xl font-bold">Activity Tracker</h1>
      </header>

      <div className="container mx-auto mt-8 p-10">
        <section className="mb-8">
          <h2 className="sm:text-3xl text-xl font-bold mb-4">Add New Activity</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Activity
              </label>
              <input
                type="text"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={duration}
                min="0" // Ensure non-negative numbers
                onChange={(e) => setDuration(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Calories Burned
              </label>
              <input
                type="number"
                value={caloriesBurned}
                min="0" // Ensure non-negative numbers
                onChange={(e) => setCaloriesBurned(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting} // Disable button during submission
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Adding...' : 'Add Activity'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default page;
