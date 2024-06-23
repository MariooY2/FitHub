import { signOutAction } from "../_lib/actions";
function SignOut() {
    return (
      <form action={signOutAction} >
        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Sign Out
        </button>
      </form>
    );
  }
  
  export default SignOut;