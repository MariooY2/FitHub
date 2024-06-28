import { getWorkoutById } from "../../../_Backend/WorkoutHandling";

export async function generateStaticParams() {
    const ids = [
        { workoutID: "2" },
        { workoutID: "3" },
        { workoutID: "4" },
        { workoutID: "5" },
        { workoutID: "6" },
        { workoutID: "7" },
      ];

  return ids;
}

function ErrorMessage() {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Oops! </strong>
        <span className="block sm:inline">Something went wrong workout isn't available.</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        
        </span>
      </div>
    );
  }

export default async function page({ params }) {
  const ID = params.workoutID;
  
  const workout = await getWorkoutById(ID);

    if(workout===false){
        return(
            <ErrorMessage/>
        )
    }
    
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-800 text-white">
          <h1 className="text-3xl font-bold">{workout?.name}</h1>
          <p className="mt-1 text-sm">{workout?.description}</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {workout?.Exercises.map((exerciseStr, index) => {
              const exercise = JSON.parse(exerciseStr); // Parse the JSON string into an object
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                >
                  <dt className="text-sm font-semibold text-gray-600">
                    {exercise.name}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="space-y-1">
                      <p>
                        <span className="font-semibold">Type:</span>{" "}
                        {exercise.type}
                      </p>
                      <p>
                        <span className="font-semibold">Sets:</span>{" "}
                        {exercise.sets}
                      </p>
                      <p>
                        <span className="font-semibold">Reps:</span>{" "}
                        {exercise.reps}
                      </p>
                      <p>
                        <span className="font-semibold">Duration:</span>{" "}
                        {exercise.duration} minutes
                      </p>
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
