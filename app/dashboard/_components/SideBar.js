import Link from "next/link";
import SignOut from "../../_components/SignOut"
import Image from "next/image";
import { auth } from "../../_lib/auth";
async function SideBar() {
  const session =await auth();
  const image=session.user.image
  console.log(session)
  return (
    <aside className="flex flex-col justify-between items-center h-screen bg-gray-800 text-white p-1">
    <ul>
      <li className="mb-6 ">
      <div className="flex items-center justify-center">
      <div className="w-16 h-16 relative overflow-hidden rounded-full mt-7 mb-5 "> {/* Container to apply rounding */}
      <Image
        src={image}
        alt="Descriptive Alt Text"
       fill
        objectFit="cover"
        className="rounded-full " // Applying rounded-full here as well for Tailwind
      />
    </div>
    </div>
    <div className="flex items-center justify-center flex-col ">
        <Link href="/dashboard/home" className="w-full block p-4 hover:bg-gray-700 rounded text-center">
         Home
        </Link>
        <Link href="/dashboard/workouts" className="w-full block p-4 hover:bg-gray-700 rounded text-center">
         Workouts
        </Link>
        <Link href="/dashboard/progress" className="w-full block p-4 hover:bg-gray-700 rounded text-center">
         Progress
        </Link>
        <Link href="/dashboard/community" className="w-full block p-4 hover:bg-gray-700 rounded text-center">
         Community
        </Link>
        <Link href="/dashboard/profile" className="w-full block p-4 hover:bg-gray-700 rounded text-center">
         Profile
        </Link>
        </div>
      </li>
      
      {/* Add additional navigation items here */}
    </ul>
    
    <div className="mt-6 mb-4">
      <SignOut />
    </div>
  </aside>
  );
}

export default SideBar;
