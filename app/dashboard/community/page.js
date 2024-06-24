function page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white text-center p-8">
        <h1 className="text-4xl font-bold">FitHub Community</h1>
        <p className="text-xl mt-2">
          Connect and share with fellow fitness enthusiasts!
        </p>
      </header>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 italic">
                "Joining FitHub was the best decision for my fitness journey.
                The community support is fantastic and motivating!"
              </p>
              <div className="mt-4 text-right">
                <span className="font-semibold">
                  - Alex Johnson, Fitness Enthusiast
                </span>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 italic">
                "The daily challenges keep me engaged and constantly pushing my
                limits. Love the energy here!"
              </p>
              <div className="mt-4 text-right">
                <span className="font-semibold">
                  - Maria Gomez, Marathon Runner
                </span>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 italic">
                "FitHub's resources and expert advice have helped me improve my
                workout routines significantly."
              </p>
              <div className="mt-4 text-right">
                <span className="font-semibold">
                  - John Doe, Personal Trainer
                </span>
              </div>
            </div>
          </div>
        </section>
        <h2 className="text-3xl font-bold text-center mt-12 mb-6">
    Share Your Experience
  </h2>
  <section>
  <div className="bg-white rounded-lg shadow p-6">
    <p className="text-gray-800 mb-4">
      Your feedback helps us improve and motivates others in their fitness journey. Please share your experience!
    </p>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" required />
      </div>
      <div className="mb-4">
        <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700">Testimonial</label>
        <textarea id="testimonial" name="testimonial" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" required></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit Testimonial
      </button>
    </form>
  </div>
</section>
        
      </div>
    </div>
  );
}

export default page;
