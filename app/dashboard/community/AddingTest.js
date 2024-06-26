"use client";
import { addTestimonial } from "@/app/_Backend/Testimonials";
import { useState } from "react";
import { useRouter } from "next/navigation";

function AddingTest({ name }) {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle the submission state

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Disable the button and show loading state

    // Call the addTestimonial function with the name and description state
    const result = await addTestimonial(name, description);
    if (result) {
      console.log("Testimonial added successfully:", result);
      setDescription(""); // Optionally clear the form or handle success
      router.refresh(); // Refresh the page or redirect
    } else {
      console.error("Failed to add testimonial");
    }

    setIsSubmitting(false); // Re-enable the button after operation
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-12 mb-6">
        Share Your Experience
      </h2>

      <p className="text-gray-800 mb-4">
        Your feedback helps us improve and motivates others in their fitness
        journey. Please share your experience!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700">
            Testimonial
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            required style={{ resize: "none" }}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting} // Disable the button while submitting
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </>
  );
}

export default AddingTest;
