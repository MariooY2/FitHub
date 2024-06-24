import Link from "next/link";
import SignOut from "../../_components/SignOut";
import Image from "next/image";
import { auth } from "../../_lib/auth";
async function SideBar() {
  const session = await auth();
  const image = session.user.image;
  const name=session.user.name;
  const email=session.user.email
  return (
    <aside className="flex flex-col justify-between items-center h-screen bg-gray-800 text-white p-1">
      <ul>
        <li className="mb-6 ">
          <div className="flex items-center justify-center flex-col mb-10">
            <div className="w-16 h-16 relative overflow-hidden rounded-full mt-7 mb-5 ">
          
              {/* Container to apply rounding */}
              <Link href="/dashboard/profile"> <Image
                src={image}
                alt="Descriptive Alt Text"
                fill
                objectFit="cover"
                className="rounded-full " // Applying rounded-full here as well for Tailwind
              /></Link>
             
            </div>
            <div>{name}</div>
            
          </div>
          <div className="flex items-center justify-center flex-col ">
            <Link
              href="/dashboard"
              className="w-full block p-4 hover:bg-gray-700 rounded text-center"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/workouts"
              className="w-full block p-4 hover:bg-gray-700 rounded text-center"
            >
              Workouts
            </Link>
            <Link
              href="/dashboard/progress"
              className="w-full block p-4 hover:bg-gray-700 rounded text-center"
            >
              Progress
            </Link>
            <Link
              href="/dashboard/community"
              className="w-full block p-4 hover:bg-gray-700 rounded text-center"
            >
              Community
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
