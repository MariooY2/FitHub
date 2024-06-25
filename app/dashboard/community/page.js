import {getAllTestimonials } from "@/app/_Backend/Testimonials";
import AddingTest from "./AddingTest";
import { auth } from "@/app/_lib/auth";


 function Testimonial({ testimonial }) {
 
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600 italic">"{testimonial.description}"</p>
      <div className="mt-4 text-right">
        <span className="font-semibold">
          - {testimonial.name}
        </span>
      </div>
    </div>
  );
}

async function page() {
  const session = await auth();
  const name=session.user.name;
  console.log(name)
  const testimonials=await getAllTestimonials();
  

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
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

        <AddingTest name={name}/>
      </div>
    </div>
  );
}

export default page;
