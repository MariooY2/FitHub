import supabase from "./supabase";

export async function addTestimonial(name, description) {
    try {
      const { data, error } = await supabase
        .from("Testimonials")
        .insert([{ name, description }])
        .select();
  
      if (error) {
        throw error;
      }
  
      console.log("Inserted data:", data);
      return data;
    } catch (error) {
      console.error("Error inserting testimonial:", error);
      return null;
    }
  }
  export async function getAllTestimonials() {
    try {
        const { data, error } = await supabase
            .from("Testimonials")
            .select("*");

        if (error) {
            throw error;
        }

        console.log("Retrieved testimonials:", data);
        return data;
    } catch (error) {
        console.error("Error retrieving testimonials:", error);
        return null;
    }
}