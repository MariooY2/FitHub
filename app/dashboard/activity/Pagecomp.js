"use client";

import { insertActivity } from "../../_Backend/Activities";
import { useState } from "react";



 function page({email}) {
    
   

  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    insertActivity(email, activity, duration, caloriesBurned)
      .then((data) => {
        console.log("Inserted data:", data);
        // Clear the form
        setActivity("");
        setDuration("");
        setCaloriesBurned("");
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-blue-500 text-white text-center p-6 rounded-lg shadow">
        <h1 className="text-4xl font-bold">Activity Tracker</h1>
      </header>

      <div className="container mx-auto mt-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Add New Activity</h2>
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
                onChange={(e) => setCaloriesBurned(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Activity
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default page;
