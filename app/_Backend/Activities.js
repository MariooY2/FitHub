import supabase from "./supabase";

export async function insertActivity(
  email,
  Activity,
  Duration,
  CaloriesBurned
) {
  try {
    const { data, error } = await supabase
      .from("Activities")
      .insert([{ email, Activity, Duration, CaloriesBurned }])
      .select();

    if (error) {
      throw error;
    }

    console.log("Inserted data:", data);
    return data;
  } catch (error) {
    console.error("Error inserting data:", error);
    return null;
  }
}
export async function getTotalRowsForEmail(email) {
  try {
    const { count, error } = await supabase
      .from("Activities")
      .select("*", { count: "exact", head: true })
      .eq("email", email);

    if (error) {
      throw error;
    }

    return count;
  } catch (error) {
    console.error("Error getting total rows:", error);
    return null;
  }
}
export async function getTotalCaloriesForEmail(email) {
    try {
      const { data, error } = await supabase
        .from("Activities")
        .select("CaloriesBurned")
        .eq("email", email);
  
      if (error) {
        throw error;
      }
  
      // Sum up the CaloriesBurned for the given email
      const totalCalories = data.reduce((total, activity) => total + activity.CaloriesBurned, 0);
  
      return totalCalories;
    } catch (error) {
      console.error("Error getting total calories burned:", error);
      return null;
    }
  }
  export async function getActivitiesForEmail(email) {
    try {
      const { data, error } = await supabase
        .from("Activities")
        .select("*")
        .eq("email", email);
  
      if (error) {
        throw error;
      }
  
      return data;
    } catch (error) {
      console.error("Error getting activities:", error);
      return null;
    }
  }
  export async function deleteActivity(activityId) {
    try {
      const { data, error } = await supabase
        .from("Activities")
        .delete()
        .match({ id: activityId });
  
      if (error) {
        throw error;
      }
  
      console.log("Deleted data:", data);
      return data;
    } catch (error) {
      console.error("Error deleting activity:", error);
      return null;
    }
  }