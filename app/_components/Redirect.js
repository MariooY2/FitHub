import { auth } from "../_lib/auth"
import { redirect } from 'next/navigation'
async function Redirect() {
const session=await auth();
    if(session?.user){
        redirect("/dashboard")
    }
   
}

export default Redirect
