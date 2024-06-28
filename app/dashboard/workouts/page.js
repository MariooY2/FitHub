
//import { useState } from "react";
import { addWorkout } from "../../_Backend/WorkoutHandling";
import Loader from "@/app/_components/Loader";
import Link from "next/link";
import Image from "next/image";

// Define a function to return an array of workout data
function getWorkouts() {
  return [
    {
      id: 1,
      name: "Push",
      description:
        "Focus on strengthening the upper body pushing muscles including chest, shoulders, and triceps.",
      imageUrl: "/push.png",
      detailsLink: "/dashboard/workouts/3",
    },
    {
      id: 2,
      name: "Pull",
      description:
        "A targeted workout day focused on back, biceps, and rear deltoids, encompassing all major pulling muscles to enhance strength and muscle growth.",
      imageUrl: "/pull.png",
      detailsLink: "/dashboard/workouts/5",
    },
    {
      id: 3,
      name: "Legs",
      description:
        "A comprehensive lower body workout targeting all major muscle groups in the legs, including quadriceps, hamstrings, glutes, and calves.",
      imageUrl: "/legs.png",
      detailsLink: "/dashboard/workouts/4",
    },
    {
      id: 4,
      name: "Full Body Blast",
      description:
        "A comprehensive body workout to engage all major muscle groups. Perfect for any fitness level.",
      imageUrl: "/full.png",
      detailsLink: "/dashboard/workouts/2",
    },
    {
      id: 5,
      name: "Cardio Session",
      description:
        "A dynamic session designed to boost cardiovascular health, improve endurance, and aid in calorie burning through a mix of high-intensity and steady-state exercises.",
      imageUrl: "/cardio.png",
      detailsLink: "/dashboard/workouts/6",
    },
    {
      id: 6,
      name: "Abs and Core",
      description:
        "This session focuses on building strength and endurance in the abdominal and core muscles through a series of targeted exercises.",
      imageUrl: "/absandcore.png",
      detailsLink: "/dashboard/workouts/7",
    },
  ];
}

function page() {
  /*const workouts = getWorkouts();
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
};*/
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Workouts Library
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
          >
              {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
                    <Loader />
                </div>
            )}
            <Image
              src={workout.imageUrl}
              alt={workout.name}
              className={`w-full h-48 object-cover  ${isLoading ? 'hidden' : 'block'}` }
              onLoad={handleImageLoad}
              width={400}
              height={200}
            />
            <div className="p-5 flex-grow">
              <h2 className="text-xl font-bold text-gray-900">
                {workout.name}
              </h2>
              <p className="text-gray-600 flex-grow">{workout.description}</p>
            </div>
            <div className="px-5 pb-5">
              <Link
                href={workout.detailsLink}
                className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 ml-2 py-2 px-4 rounded w-full text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
