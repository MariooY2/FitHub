import supabase from "./supabase";

export async function getWorkoutById(workoutId) {
  try {
    const { data, error } = await supabase
      .from("Workouts") // Assuming 'Workouts' is the table name
      .select("*")
      .eq("id", workoutId)
      .single(); // Use single to expect only one record or null

    if (error) {
      throw new Error(error.message);
    }

    console.log("Fetched workout:", data);
    return data;
  } catch (error) {
    console.error("Error fetching workout:", error);
    return false;
  }
}
export async function addWorkout(workoutData) {
  try {
    const { data, error } = await supabase
      .from("Workouts") // Make sure 'Workouts' is the correct table name
      .insert([
        {
          name: workoutData.name,
          description: workoutData.description,
          Totalduration: workoutData.totalDuration,
          Exercises: workoutData.Exercises, // Assumes that your Supabase table can accept an array directly
        },
      ]);

    if (error) {
      throw error;
    }

    console.log("Workout added:", data);
    return data;
  } catch (error) {
    console.error("Error adding workout:", error);
    return null;
  }
}
