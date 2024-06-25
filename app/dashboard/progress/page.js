
import { auth } from "@/app/_lib/auth";
import Overview from "./Overview";
import Activity from "./Activity";

async function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Your Progress Dashboard
      </h1>

      <Overview />

      <Activity />
    </div>
  );
}

export default page;
