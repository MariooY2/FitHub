"use client";
import { deleteActivity } from "@/app/_Backend/Activities";
export default function DeleteButton({ ID }) {
  return (
    <button
      onClick={() => deleteActivity(ID)}
      type="button"
      className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
    >
      Delete
    </button>
  );
}
