import Link from 'next/link';
function page() {
    return (
        
            <div>
              <header className="bg-blue-600 text-white py-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-4">
                  <h1 className="text-3xl font-bold">FitHub</h1>
                  <nav className='flex gap-8 justify-between'>
                    <Link href="/login">Login</Link>
                    <Link href="/">Home</Link>
                  </nav>
                </div>
              </header>
        
              <main className="container mx-auto px-5 py-12">
                <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Have any questions or feedback? We'd love to hear from you!
                </p>
        
                <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Your Name"
                        required
                      />
                    </div>
        
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Your Email"
                        required
                      />
                    </div>
        
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Subject"
                        required
                      />
                    </div>
        
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-700 font-bold mb-2 ">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="w-full px-3 py-2 border rounded-lg  resize-none"
                        placeholder="Your Message"
                        required
                       
                      ></textarea>
                    </div>
        
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-full hover:bg-blue-700 transition duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </main>
        
              <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto text-center">
                  <p>&copy; 2024 FitHub. All rights reserved.</p>
                 
                </div>
              </footer>
            </div>
          )
}

export default page
