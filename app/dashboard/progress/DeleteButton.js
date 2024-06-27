// Assuming "use client" or a similar directive if necessary
"use client";

import { deleteActivity } from "@/app/_Backend/Activities";
import { useRouter } from "next/navigation";
export default function DeleteButton({ ID }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteActivity(ID);
      console.log("Activity deleted, refreshing...");
      router.refresh();
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      type="button"
      className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
    >
      Delete
    </button>
  );
}
