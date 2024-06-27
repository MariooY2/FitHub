import { auth } from "../_lib/auth"
import { useRouter } from 'next/navigation'
async function Redirect() {
    const router = useRouter()
const session=await auth();
    if(session?.user){
        router.push('/dashboard', { scroll: false })
    }
   
}

export default Redirect
