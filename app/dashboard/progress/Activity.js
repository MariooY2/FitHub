import { auth } from "@/app/_lib/auth";
import {
  getActivitiesForEmail,
  deleteActivity,
} from "@/app/_Backend/Activities";
import DeleteButton from "./DeleteButton";
export default async function Activity() {
  const session = await auth();
  const activities = await getActivitiesForEmail(session.user.email);
  

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-5">Activity Logs</h2>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Activity
              </th>
              <th scope="col" className="py-3 px-6">
                Duration
              </th>
              <th scope="col" className="py-3 px-6">
                Calories Burned
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="py-4 px-6">
                  {new Date(activity.created_at).toISOString().slice(0, 10)}
                </td>
                <td className="py-4 px-6">{activity.Activity}</td>
                <td className="py-4 px-6">{activity.Duration} min</td>
                <td className="py-4 px-6">{activity.CaloriesBurned} kcal</td>
                <td className="py-4 px-6">
                 <DeleteButton ID={activity.id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
